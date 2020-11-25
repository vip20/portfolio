import React from "react";
import { Container } from "react-bootstrap";
import { SkillSetup } from "../../core/types";
import { CircularProgressBar } from "../circularProgress/CircularProgress";
export function Skills({ appConst }: any) {
  let skills: SkillSetup = appConst.skills;
  return (
    <Container>
      <div className="text-center message-info">
        <h3>Skills</h3>
      </div>
      <div className="message-info">
        <h4>Professional</h4>
      </div>
      {skills.professionalSkills.map((x, i) => {
        return (
          <div key={i}>
            <div>{x.name}</div>
            <CircularProgressBar
              progress={x.gpa * 10}
              size={100}
              strokeWidth={5}
              circleOneStroke="#d9edfe"
              circleTwoStroke="#9fd3c7"
              displayText={`${x.gpa.toString()} / 10`}
              displayTextColor="#142d4c"
            ></CircularProgressBar>
          </div>
        );
      })}
    </Container>
  );
}
