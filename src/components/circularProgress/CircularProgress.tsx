import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import "./CircularProgress.scss";

export const CircularProgressBar = (props: any) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef<any>(null);
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
    displayText,
    displayTextColor,
  } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    if (circleRef && circleRef.current) {
      circleRef.current.style =
        "transition: stroke-dashoffset 850ms ease-in-out";
    }
  }, [setOffset, progress, circumference, offset]);

  return (
    <>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x={`${center}`}
          y={`${center}`}
          className="svg-circle-text"
          style={{
            fill: displayTextColor ? displayTextColor : circleTwoStroke,
          }}
        >
          {displayText ? displayText : `${progress}%`}
        </text>
      </svg>
    </>
  );
};

CircularProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
  displayText: PropTypes.string,
  displayTextColor: PropTypes.string,
};
