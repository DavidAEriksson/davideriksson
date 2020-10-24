import React from "react";

import {
  FaReact,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaAndroid,
  FaNodeJs,
  FaDocker,
  FaSass,
  FaUnity,
} from "react-icons/fa";
import {
  DiMongodb,
  DiJavascript1,
  DiPython,
  DiPhotoshop,
  DiIllustrator,
  DiMysql,
} from "react-icons/di";
import { SiFirebase, SiGooglemaps } from "react-icons/si";

const IconObject = (props) => {
  const Icon = props.icon;
  if (Icon === "FaReact") {
    return <FaReact />;
  } else if (Icon === "FaJava") {
    return <FaJava />;
  } else if (Icon === "FaCss3Alt") {
    return <FaCss3Alt />;
  } else if (Icon === "FaHtml5") {
    return <FaHtml5 />;
  } else if (Icon === "FaSass") {
    return <FaSass />;
  } else if (Icon === "FaAndroid") {
    return <FaAndroid />;
  } else if (Icon === "FaNodeJs") {
    return <FaNodeJs />;
  } else if (Icon === "FaDocker") {
    return <FaDocker />;
  } else if (Icon === "DiMongodb") {
    return <DiMongodb />;
  } else if (Icon === "DiJavascript1") {
    return <DiJavascript1 />;
  } else if (Icon === "DiPython") {
    return <DiPython />;
  } else if (Icon === "DiPhotoshop") {
    return <DiPhotoshop />;
  } else if (Icon === "DiIllustrator") {
    return <DiIllustrator />;
  } else if (Icon === "DiMysql") {
    return <DiMysql />;
  } else if (Icon === "SiFirebase") {
    return <SiFirebase />;
  } else if (Icon === "SiGooglemaps") {
    return <SiGooglemaps />;
  } else if (Icon === "FaUnity") {
    return <FaUnity />;
  } else return <div></div>;
};

export default IconObject;
