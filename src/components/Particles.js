import React from "react";
import Particle from "react-particles-js";
import config from "../styles/particlesjs-config.json";

const Particles = () => {
  return (
    <div
      style={{
        top: "0",
        left: "0",
        position: "absolute",
      }}
    >
      <Particle params={config} style={{ width: "100%", height: "100%", position: "fixed",  }} />
    </div>
  );
};

export default Particles;
