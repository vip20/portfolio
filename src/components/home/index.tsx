import React from "react";
import { PageSetup } from "../../core/types";
import Image from "react-bootstrap/Image";
import profilePic from "../../assets/vinay_1.jpg";

export default function Home({ appConst }: { appConst: PageSetup }) {
  return (
    <div className="home-container">
      <div className="info"></div>
      <div className="hero-container">
        <Image
          className="
            hero-img"
          src={profilePic}
          roundedCircle
        />
      </div>
    </div>
  );
}
