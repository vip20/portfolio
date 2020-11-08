import React from "react";
import { APP_CONST } from "../../core/constants";
import { CustNavbar } from "../custnavbar/CustNavbar";

export const Home = () => {
  let homeConst = APP_CONST.home;

  return (
    <div className="m-24">
      <CustNavbar appConst={homeConst}></CustNavbar>
    </div>
  );
};
