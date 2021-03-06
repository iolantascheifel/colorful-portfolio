import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import "./skills.css";

import ts from "./icons/typescript.png";
import html from "./icons/html-5.png";
import css from "./icons/css-3.png";
import js from "./icons/js.png";
import sass from "./icons/sass.png";
import ps from "./icons/photoshop.png";
import git from "./icons/git.png";
import react from "./icons/atom.png";
import figma from "./icons/figma.png";
import github from "./icons/github.png";
import sc from "./icons/sc.png";
import nextjs from "./icons/next-js.png";

import group from "./group.svg";

const Skills = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./skills.json"),
    });
  });

  return (
    <div className="skills" id="skills">
      <img src={group} alt="" className="group" />
      <div className="skills-main-container">
        <div className="skills-name-wrapper">
          <h1 className="skillsName">Skills</h1>
          <div className="lottie" ref={container}></div>
        </div>
        <div className="skillsContainer">
          <div className="icons">
            <div className="iconsLeft">
              <img src={react} alt="react" className="icon" />
              <img src={js} alt="js" className="icon" />
              <img src={html} alt="html" className="icon" />
              <img src={css} alt="css" className="icon" />
              <img src={ts} alt="ts" className="icon" />
              <img src={nextjs} alt="nextjs" className="icon-next" />
            </div>
            <div className="iconsRight">
              <img src={sass} alt="sass" className="icon" />
              <img src={git} alt="git" className="icon" />
              <img src={github} alt="github" className="icon" />
              <img src={sc} alt="sc" className="icon" />
              <img src={figma} alt="figma" className="icon" />
              <img src={ps} alt="ps" className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
