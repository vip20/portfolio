import React, { useState } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import "./About.scss";
import aboutMePic from "../../assets/about_me.svg";
import useResponsive from "../../hooks/useResponsive";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutSetup, DownloadFile } from "../../core/types";
import { storageRef } from "../../firebase";
import { from } from "rxjs/internal/observable/from";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { BREAKPOINT_MOBILE } from "../../core/constants";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
export const About = ({ appConst }: any) => {
  const aboutConst: AboutSetup = appConst.about;
  const { width } = useResponsive();
  let aboutCntrClass = classNames({
    "is-mobile": width < BREAKPOINT_MOBILE,
    "about-container": true,
  });
  let iDoListClass = classNames({
    "d-flex": true,
    "flex-row": width >= BREAKPOINT_MOBILE,
    "flex-column": width < BREAKPOINT_MOBILE,
    "justify-content-center": true,
  });
  const [downloadStatus, setDownloadStatus] = useState("");

  const downloadFile = (downloadFile: DownloadFile) => {
    if (downloadStatus === "") {
      setDownloadStatus("Applying CSS...");
      getFilefromFirebase(downloadFile.link)
        .pipe(switchMap((x) => of(x)))
        .subscribe(
          (url) => {
            // This can be downloaded directly:
            var xhr = new XMLHttpRequest();
            xhr.responseType = "blob";
            xhr.open("GET", url);
            xhr.send();

            xhr.onload = function (e) {
              if (this.status === 200) {
                setDownloadStatus("Preparing...");
                // Create a new Blob object using the response data of the onload object
                var blob = new Blob([this.response], {
                  type: downloadFile.mimeType,
                });
                //Create a link element, hide it, direct it towards the blob, and then 'click' it programatically
                let a: any = document.createElement("a");
                a.style = "display: none";
                document.body.appendChild(a);
                //Create a DOMString representing the blob and point the link element towards it
                let url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = downloadFile.fileName;
                //programatically click the link to trigger the download
                a.click();
                //release the reference to the file by revoking the Object URL
                window.URL.revokeObjectURL(url);
                setDownloadStatus("");
              } else {
                //deal with your error state here
                setDownloadStatus("");
              }
            };
          },
          (e) => {
            console.error(e);
            setDownloadStatus("");
          }
        );
    }
  };

  return (
    <Container>
      <div className={aboutCntrClass}>
        <div>
          <img src={aboutMePic} alt="About Me" className="img-border" />
        </div>
        <div className="message-info">
          <h3>
            <b>{aboutConst.title}</b>
          </h3>
          <p>{aboutConst.message}</p>
          <ul className="pill">
            {aboutConst.moreSkills.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
          <Button
            type="button"
            variant="secondary"
            onClick={() => downloadFile(aboutConst.cvDownload)}
          >
            {downloadStatus !== "" ? (
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="pr-1"
                />
                {downloadStatus}
              </>
            ) : (
              <>
                Download CV
                <FontAwesomeIcon
                  className="pl-1"
                  icon="download"
                ></FontAwesomeIcon>
              </>
            )}
          </Button>
        </div>
      </div>
      {aboutConst.ido && (
        <div className="i-do">
          <div className="message-info mt-4">
            <h3 className="text-center">
              <b>{aboutConst.ido.title}</b>
            </h3>
            <div className={iDoListClass}>
              {aboutConst.ido.tasks.map((x, i) => (
                <Card
                  key={i}
                  style={{ width: "20rem" }}
                  className="shadow p-3 m-4 bg-white rounded border-0 "
                >
                  <Card.Body>
                    <div className="text-sm-center text-md-left">
                      <div className="card-title h5">
                        <div>
                          <b>{x.title}</b>
                        </div>
                      </div>
                    </div>
                    <Card.Text>{x.message}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

const getFilefromFirebase = (fileName: string) => {
  return from(storageRef.child(`${fileName}`).getDownloadURL());
};
