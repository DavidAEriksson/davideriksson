import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

import mountains from "../src/SVG/mountains.svg";
import "../src/styles/app.scss";

import ParticleComponent from "../src/components/Particles.js";
import About from "./components/About";
import Projects from "./components/Projects";
const App = () => {
  const [aboutDivDisplayState, setAboutDivDisplayState] = useState("flex");

  useEffect(() => {
    console.log("aboutDivDisplayState: ", aboutDivDisplayState);
  }, [aboutDivDisplayState]);

  return (
    <div className="page-wrapper">
      <div className="app-wrapper">
        <ParticleComponent />

        <div className="typed-container">
          <Typed
            strings={["David Eriksson"]}
            typeSpeed={130}
            className="typed-heading"
          />

          <Typed
            strings={[
              "User experience design",
              "Front-end development",
              "Back-end development",
              "Database management",
              "Project management",
            ]}
            typeSpeed={130}
            backSpeed={65}
            smartBackspace={true}
            loop={true}
            className="typed-subheading"
          />
        </div>

        <div className="img-wrapper">
          <Link
            className="link"
            to="about"
            smooth={true}
            duration={1000}
            onClick={() => setAboutDivDisplayState("flex")}
          >
            <i className="gg-arrow-long-down-c"></i>
          </Link>
          <img src={mountains} className="mountains" alt="mountains" />
        </div>
      </div>

      <div id="about">
        <About style={{ display: aboutDivDisplayState }} />
      </div>
    </div>
  );
};

export default App;
