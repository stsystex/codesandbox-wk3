import React from "react";

export const ColorfulMessage = (props) => {
  console.log("sub");
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};
