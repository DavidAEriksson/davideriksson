import React from "react";
import { IconContext } from "react-icons";
import {
  FaReact,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaAndroid,
  FaNodeJs
} from "react-icons/fa";
import {
  DiMongodb,
  DiJavascript1,
  DiPython,
  DiPhotoshop,
  DiIllustrator,
  DiMysql
} from "react-icons/di";

import "../styles/about.scss";
import landscape from "../SVG/landscape.svg";
import aboutPic from "../IMG/davidaeriksson.jpg";

const About = props => {
  return (
    <div className="about-wrapper" style={props.style}>
      <h1>About</h1>

      <div className="about-main-container">
        <img className="about-pic" src={aboutPic} alt="david" />
        <p>
          My name is David Eriksson, I am currently studying for my masters
          degree
          <br /> in{" "}
          <a href="http://interaktion.nu/">
            Interaction Technology and Design at Umeå University
          </a>{" "}
          in Sweden and also
          <br /> very recently at Nanyang Technological University in Singapore.
          <br /> I've loved computers and technology all my life, but it was
          during my university
          <br /> studies that I found my passion for creating elegant solutions
          for
          <br /> the web and mobile applications.
        </p>
      </div>
      <div className="about-skills-container">
        <h2>Skills</h2>
        <div className="skill-icons">
          <IconContext.Provider value={{ color: "#d8dee9", size: "50px" }}>
            <div>
              <FaReact />
              <FaNodeJs />
              <DiJavascript1 />
              <FaCss3Alt />
              <FaHtml5 />
              <DiMongodb />
              <DiMysql />
              <FaJava />
              <DiPython />
              <FaAndroid />
              <DiPhotoshop />
              <DiIllustrator />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={landscape} className="landscape" alt="landscape.svg" />
      </div>
    </div>
  );
};

export default About;
