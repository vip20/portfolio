import React from "react";
import { APP_CONST } from "../../core/constants";
import { PageSetup } from "../../core/types";
import CustNav from "../custNav";

function Landing() {
  const appConst: PageSetup = APP_CONST.home;
  return (
    <>
      <CustNav appConst={appConst}></CustNav>
    </>
  );
}

export default Landing;
