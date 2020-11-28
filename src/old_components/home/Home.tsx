import classNames from "classnames";
import React from "react";
import FadeIn from "react-fade-in";
import { APP_CONST, BREAKPOINT_MOBILE } from "../../core/constants";
import useResponsive from "../../hooks/useResponsive";
import useSticky from "../../hooks/useSticky";
import { About } from "../about/About";
import { CustNavbar } from "../custnavbar/CustNavbar";
import { Profile } from "../profile/Profile";
import { Skills } from "../skills/Skills";
import "./Home.scss";

export const Home = () => {
  const { isSticky, element } = useSticky();

  const homeConst = APP_CONST.home;

  const { width } = useResponsive();
  let sectionCntrClass = classNames({
    "is-mobile": width < BREAKPOINT_MOBILE,
    "section-container": true,
  });
  return (
    <div className=" full-height">
      <CustNavbar appConst={homeConst} isSticky={isSticky}></CustNavbar>
      <div ref={element}>
        <FadeIn>
          <section id="home" className={sectionCntrClass}>
            <Profile appConst={homeConst}></Profile>
          </section>
          <section id="about" className={sectionCntrClass}>
            <About appConst={homeConst}></About>
          </section>
          <section id="skills" className={sectionCntrClass}>
            <Skills appConst={homeConst}></Skills>
          </section>
        </FadeIn>
      </div>
    </div>
  );
};
