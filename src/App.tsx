import React, { useEffect, useState } from "react";
import "./App.css";
import myPic from "./assets/vinay_1.jpg";
import ItemRotator from "./components/item-rotator";
import { AppData, APP_DATA_CONST } from "./core/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDownload,
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { storageRef } from "./firebase";
import { from, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { DownloadFile } from "./core/types";
import { diff_years } from "./core/utils";
import firebase from "firebase";

const analytics = firebase.analytics();
library.add(
  fab,
  faGithub,
  faTwitter,
  faLinkedin,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faDownload,
  faMobileAlt,
  faCode
);

const getFilefromFirebase = (fileName: string) => {
  return from(storageRef.child(`${fileName}`).getDownloadURL());
};

export function App() {
  const appDataConst: AppData = APP_DATA_CONST;
  const yearDiff = diff_years(new Date(), appDataConst.about.startDate);
  useEffect(() => {
    [
      "vendor/assets/js/numscroller.js",
      "vendor/assets/js/progress-bar.min.js",
      "vendor/assets/js/magnific-popup-options.js",
      "vendor/assets/js/main.js",
    ].forEach((src) => {
      let script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
  }, []);

  const [downloadStatus, setDownloadStatus] = useState("");

  const downloadFile = (downloadFile: DownloadFile) => {
    analytics.logEvent("download_resume");
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
    <>
      {/* <!-- // PRELOADER BEGIN --> */}
      <div id="preloader">
        <div id="status">
          <div className="loader-revolve center">
            <span></span>
          </div>
        </div>
      </div>
      {/* <!-- // PRELOADER END -->

	<!-- // NAVIGATION BEGIN --> */}
      <div id="navigation">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="logo">
                <a href="/">VINAY</a>
              </div>
            </div>

            <div className="col-sm-9">
              <div className="navigation-menu">
                <div className="navbar">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                      {appDataConst.navItems.map((nav) => (
                        <li>
                          <a className="smoth-scroll" href={nav.url}>
                            {nav.displayName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- // NAVIGATION END -->

	<!-- // HOME BEGIN --> */}
      <div
        id="home"
        className="home-bg"
        style={{ backgroundImage: "url('vendor/assets/img/bg.jpg')" }}
        data-stellar-background-ratio="0.6"
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="home-text">
                <div
                  className="profile-pic"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  <img src={myPic} alt="vinay" />
                </div>

                <div
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  <h1>{appDataConst.home.intro}</h1>
                  <h3 id="text-rotator">
                    <div>
                      <ItemRotator
                        items={appDataConst.home.skills}
                        interval={appDataConst.home.skillsInterval}
                      />
                    </div>
                  </h3>
                </div>
              </div>
              <a className="smoth-scroll" href="#about">
                <i className="fa fa-angle-down arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- // HOME END -->

	<!-- // ABOUT BEGIN --> */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="description col-md-6 col-sm-4 col-xs-12">
              <h2>{appDataConst.about.title}</h2>
              <h4>{appDataConst.about.subTitle}</h4>
              <p>{appDataConst.about.body}</p>

              <ul className="social-icons">
                {appDataConst.socialLinks?.map((sl, i) => {
                  return (
                    <li key={i + "sl"}>
                      <a
                        href={sl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          analytics.logEvent(`clicked_${sl.fa_icon}`)
                        }
                      >
                        <FontAwesomeIcon
                          icon={["fab", sl.fa_icon as IconName]}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <p>
                <button
                  onClick={() => downloadFile(appDataConst.about.cvDownload)}
                  className="btn btn-dark with-arrow smoth-scroll"
                >
                  My Resume
                  <i className="fa fa-download"></i>
                </button>
              </p>
            </div>

            <div className="facts col-md-5 col-sm-5 col-xs-12">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="count-item">
                    <div className="about-experience">
                      {appDataConst.about.currentEmployer}
                    </div>

                    <div className="count-name-intro">Current Employer</div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="count-item">
                    <div
                      className="numscroller"
                      data-slno="1"
                      data-min="0"
                      data-max={yearDiff}
                      data-delay="1"
                      data-increment="1"
                    >
                      {
                      yearDiff}
                    </div>
                    <div className="count-name-intro">Years of Experience</div>
                  </div>
                </div>

                {/* <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="count-item">
                    <div
                      className="numscroller"
                      data-slno="1"
                      data-min="0"
                      data-max="120"
                      data-delay="10"
                      data-increment="5"
                    >
                      120
                    </div>
                    <div className="count-name-intro">Clients</div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="count-item">
                    <div
                      className="numscroller"
                      data-slno="1"
                      data-min="0"
                      data-max="10"
                      data-delay="1"
                      data-increment="1"
                    >
                      10
                    </div>
                    <div className="count-name-intro">Awards</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- // ABOUT END -->

	<!-- // SKILLS BEGIN --> */}
      <section id="skills">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>My Skills</h2>
            </div>

            {appDataConst.technicalSkills.map((x, i) => {
              return (
                <div
                  className={`col-md-5 col-sm-6 col-xs-12 ${
                    (i + 1) % 2 === 0 ? "skills-right " : ""
                  }`}
                >
                  <div className="progress-box">
                    <p>
                      {x.name}
                      <span className="color-heading pull-right">{x.gpa}%</span>
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-color-base"
                        role="progressbar"
                        data-width={x.gpa}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- // SKILLS END -->

      <!-- // BLOG BEGIN -->*/}
      <section id="blog">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Blog Post</h2>
            </div>

            {/* <div className="col-md-4 col-sm-6">
              <div className="blog-item">
                <a href="single.html" className="blog-img">
                  <img src="assets/img/blog/blog-1.jpg" />
                </a>
                <div className="blog-desc">
                  <h4>
                    <a href="single.html">Lorem ipsum dolor sit amet</a>
                  </h4>
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                  </p>
                  <a href="single.html" className="btn btn-dark">
                    Read more
                  </a>
                </div>
              </div>
            </div> */}

            <h3>Coming Soon...</h3>
          </div>
        </div>
      </section>
      {/*<!-- // BLOG END -->


	<!-- // CONTACT BEGIN --> */}
      <section id="contact">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Contact Me</h2>
            </div>

            <div className="address-icons col-md-8 col-md-offset-2">
              {appDataConst.contactLinks?.map((cl, i) => {
                return (
                  <div className="col-md-4 col-sm-4" key={i + "cl"}>
                    <a
                      href={cl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        analytics.logEvent(`clicked_${cl.fa_icon}`)
                      }
                    >
                      <FontAwesomeIcon icon={["fas", cl.fa_icon as IconName]} />
                      <p>{cl.name}</p>
                    </a>
                  </div>
                );
              })}
              <div className="clearfix"></div>
            </div>

            <div className="col-md-8 col-md-offset-2">
              <form id="contact-form" name="contact" method="post">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Message..."
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>

                <div className="col-md-12 col-xs-12">
                  <button
                    id="submit"
                    type="submit"
                    name="submit"
                    className="btn btn-dark"
                    onClick={() => analytics.logEvent("send_message")}
                  >
                    Send Message
                  </button>
                </div>

                <div id="success" className="col-md-12 col-xs-12">
                  <p className="green textcenter">
                    Thanks for your message. I'll contact you soon.
                  </p>
                </div>

                <div id="error" className="col-md-12 col-xs-12">
                  <p>
                    Something might have gone wrong, please try again later.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- // CONTACT END-->

	<!-- // FOOTER BEGIN --> */}
      <footer id="footer">
        <div className="container">
          <div className="col-md-12 text-center">
            <ul className="social-icons-footer">
              {appDataConst.socialLinks?.map((sl, i) => {
                return (
                  <li key={i + "sl"}>
                    <a
                      href={sl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        analytics.logEvent(`clicked_${sl.fa_icon}`)
                      }
                    >
                      <FontAwesomeIcon icon={["fab", sl.fa_icon as IconName]} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <p>©{new Date().getFullYear()} Vinay P</p>
          </div>
        </div>
      </footer>
      {/* <!-- // FOOTER END --> */}
    </>
  );
}

export default App;
