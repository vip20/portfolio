import React from "react";
import { PageSetup } from "../../core/types";
import Image from "react-bootstrap/Image";
import profilePic from "../../assets/vinay_1.jpg";
import design from "../../assets/design.svg";

export default function Home({ appConst }: { appConst: PageSetup }) {
  return (
    <div className="home-container">
      <div className="info"></div>
      <div className="hero-container">
        {/* <Image
          className="
            hero-img"
          src={profilePic}
          roundedCircle
        /> */}
        {/* 
        <img src={design} alt="Design" className="hero-img" /> */}
        <svg
          className="hero-img"
          width="686"
          height="688"
          viewBox="0 0 686 688"
        >
          <g id="blockdesign" transform="translate(-935 -289)">
            <rect
              data-name="Rectangle 2"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,1277,289)"
              className="fill-pastel-1"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 10"
              width="172"
              height="172"
              rx="86"
              transform="matrix(1,0,0,1,1277,461)"
              className="fill-pastel-3"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 8"
              width="172"
              height="172"
              rx="19"
              opacity="0.8"
              transform="matrix(1,0,0,1,1449,461)"
              className="fill-pastel-2"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 5"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,1277,633)"
              className="fill-pastel-1"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 3"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,1107,461)"
              fill="#fff"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 9"
              width="172"
              height="172"
              rx="86"
              transform="matrix(1,0,0,1,1107,633)"
              className="fill-pastel-4"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 7"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,935,633)"
              fill="#fff"
              opacity="0.17"
              data-svg-origin="0 0"
            ></rect>
            <rect
              data-name="Rectangle 4"
              width="172"
              height="172"
              rx="19"
              transform="matrix(1,0,0,1,1107,805)"
              fill="#fff"
              data-svg-origin="0 0"
            ></rect>
          </g>
        </svg>
      </div>
    </div>
  );
}
