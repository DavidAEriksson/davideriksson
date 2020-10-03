import React from "react";
import IconObject from "./IconObject";

const IconCounter = (props) => {
	return props.icons.icons.map((icon, i) => <IconObject key={i} icon={icon} />);
};

export default IconCounter;
