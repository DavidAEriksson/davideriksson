import React from "react";
import Particle from "react-particles-js";
import config from "../styles/particlesjs-config.json";

const Particles = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
      }}
    >
      <Particle params={config} style={{ height: "100vh" }} />
    </div>
  );
};

export default Particles;
