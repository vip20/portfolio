import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { ProfileSetup } from "../../core/types";
import "./Profile.scss";
import profilePic from "../../assets/vinay_1.jpg";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export const Profile = (props: any) => {
  let profileConst: ProfileSetup = props.appConst.profile;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  return (
    <div
      className={isMobile ? "is-mobile profile-container" : "profile-container"}
    >
      <Container>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <FadeIn className="message-info grey-dark-3">
              <div className="message-bubble">
                {profileConst.personalDetails.bubbleMessage}
              </div>
              <h2>{profileConst.personalDetails.name}</h2>
              <h4 className="m-b-16">{profileConst.personalDetails.role}</h4>
              <ul>
                {profileConst.contactLinks?.map((cl) => {
                  return (
                    <li className="list-style">
                      <a href={cl.url}>
                        <FontAwesomeIcon
                          icon={cl.fa_icon as IconName}
                          className="heading grey-dark-2 m-r-8 icon"
                        />
                        {cl.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <FadeIn>
              <div className="img-border">
                <Image
                  className="
            hero-img"
                  src={profilePic}
                  width="300px"
                  height="300px"
                  roundedCircle
                />
              </div>
            </FadeIn>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
