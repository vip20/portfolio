import React, { useState } from "react";
import { DownloadFile, PageSetup } from "../../core/types";
import ScrollDown from "../scrolldown";
import { Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storageRef } from "../../firebase";
import { from, of } from "rxjs";
import { switchMap } from "rxjs/operators";

export default function Home({ appConst }: { appConst: PageSetup }) {
  const profileConst = appConst.profile;
  const aboutConst = appConst.about;

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
    <div className="home-container">
      <div className="info">
        <h1 className="pastel-5 mb-5">
          <b>{profileConst.personalDetails.role}</b>
        </h1>
        <h6>
          <b className="pastel-4">
            {profileConst.personalDetails.bubbleMessage}{" "}
            {profileConst.personalDetails.name}
          </b>
        </h6>

        <Button
          type="button"
          variant="secondary"
          className=" mt-5 shadow-lg d-flex align-items-center"
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
        <ScrollDown></ScrollDown>
      </div>
      <div className="hero-container">
        <svg
          className="hero-img"
          width="686"
          height="688"
          viewBox="0 0 686 688"
        >
          <g id="blockdesign" transform="translate(-935 -289)">
            <rect
              data-name="Rectangle 2"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,1277,289)"
              className="fill-pastel-1"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 10"
              width="172"
              height="172"
              rx="86"
              transform="matrix(1,0,0,1,1277,461)"
              className="fill-pastel-3"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 8"
              width="172"
              height="172"
              rx="19"
              opacity="0.8"
              transform="matrix(1,0,0,1,1449,461)"
              className="fill-pastel-2"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 5"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,1277,633)"
              className="fill-pastel-1"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 3"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,1107,461)"
              fill="#fff"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 9"
              width="172"
              height="172"
              rx="86"
              transform="matrix(1,0,0,1,1107,633)"
              className="fill-pastel-4"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 7"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,935,633)"
              fill="#fff"
              opacity="0.17"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 4"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,1107,805)"
              fill="#fff"
              data-svg-origin="0 0"
            ></rect>
          </g>
        </svg>
      </div>
    </div>
  );
}

const getFilefromFirebase = (fileName: string) => {
  return from(storageRef.child(`${fileName}`).getDownloadURL());
};
