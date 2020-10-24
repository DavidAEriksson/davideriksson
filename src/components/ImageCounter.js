import React from "react";

const ImageCounter = (props) => {
  return props.images.map((image, i) => <img key={i} src={image} />);
};

export default ImageCounter;
