import React from "react";
import { Button, Container } from "react-bootstrap";
import "./About.scss";
import aboutMePic from "../../assets/about_me.svg";
import useResponsive from "../../hooks/useResponsive";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const About = ({ appConst }: any) => {
  const { width } = useResponsive();
  let aboutCntrClass = classNames({
    "is-mobile": width < 768,
    "about-container": true,
  });

  return (
    <Container className={aboutCntrClass}>
      <div>
        <img src={aboutMePic} alt="About Me" className="img-border" />
      </div>
      <div className="message-info">
        <h3>
          <b>About Me</b>
        </h3>
        <p>
          Hello, I’m a Vinay, a web-developer based on India. I have rich
          experience in building website and customization along with Devops
          configuration using Jenkins.
        </p>
        <Button type="button" variant="secondary">
          Download CV
          <FontAwesomeIcon className="p-l-4" icon="download"></FontAwesomeIcon>
        </Button>{" "}
      </div>
    </Container>
  );
};
