import React from "react";
import { Container } from "react-bootstrap";
import "./About.scss";
import aboutMePic from "../../assets/about_me.svg";
import useResponsive from "../../hooks/useResponsive";
import classNames from "classnames";
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
      </div>
    </Container>
  );
};
