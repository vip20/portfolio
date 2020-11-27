import React from "react";
import { APP_CONST } from "../../core/constants";
import { PageSetup } from "../../core/types";
import CustNav from "../custNav";
import Home from "../home";

function Landing() {
  const appConst: PageSetup = APP_CONST.home;
  return (
    <>
      <CustNav appConst={appConst}></CustNav>
      <Home appConst={appConst}></Home>
    </>
  );
}

export default Landing;
