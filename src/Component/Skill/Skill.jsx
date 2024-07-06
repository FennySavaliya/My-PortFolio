import React from "react";
import "./Skill.css";
import skill from "../../assets/skill.jpg";
import { LinearProgress } from "@mui/material";
import theme from "../../assets/theme.png";


const Skill = () => {
  return (
    <div id="skill" className="skill">
      <div className="title">
        <h1>My Skills</h1>
        <img src={theme} alt="" height={400} />
      </div>

      <div className="skill__section">
        <div className="skill__left">
          <img src={skill} alt="" />
        </div>

        <div className="skill__right">
          <div className="skill__text">
            <h3>C</h3>
          
          <div className="skill__slider1">
            <LinearProgress variant="determinate" value={80} />
          </div>
          </div>

          <div className="skill__text">
            <h3>Java</h3>
          
          <div className="skill-slider2">
            <LinearProgress variant="determinate" value={50} />
          </div>
          </div>

          <div className="skill__text">
            <h3>HTML</h3>
          
          <div className="skill__slider3">
            <LinearProgress variant="determinate" value={90} />
          </div>
          </div>

          <div className="skill__text">
            <h3>CSS</h3>
          
          <div className="skill__slider4">
            <LinearProgress variant="determinate" value={80} />
          </div>
          </div>

          <div className="skill__text">
            <h3>JavaScript</h3>
          
          <div className="skill__slider5">
            <LinearProgress variant="determinate" value={85} />
          </div>
          </div>

          <div className="skill__text">
            <h3>React JS</h3>
          
          <div className="skill__slider6">
            <LinearProgress variant="determinate" value={70} />
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skill;
