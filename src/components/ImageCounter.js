import React from "react";

const ImageCounter = (props) => {
	return props.images.map((image, i) => <img key={i} src={require(image)} />);
};

export default ImageCounter;
