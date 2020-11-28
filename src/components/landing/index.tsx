import classNames from "classnames";
import React from "react";
import { APP_CONST, BREAKPOINT_MOBILE } from "../../core/constants";
import { PageSetup } from "../../core/types";
import useResponsive from "../../hooks/useResponsive";
import CustNav from "../custNav";
import Home from "../home";

function Landing() {
  const appConst: PageSetup = APP_CONST.home;

  const { width } = useResponsive();
  const appClass = classNames({
    sm: width < BREAKPOINT_MOBILE,
  });
  return (
    <div className={appClass} id="app">
      <CustNav appConst={appConst}></CustNav>
      <Home appConst={appConst}></Home>
    </div>
  );
}

export default Landing;
