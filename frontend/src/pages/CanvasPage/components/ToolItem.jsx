import React from "react";
import { CircleContainer } from "./styling";

export const ToolItem = (props) => {
  return (
    <CircleContainer
      onClick={props.onClick}
      style={{
        ...props.style,
        backgroundColor: (() => (props.color ? props.color : "white"))(),
        backgroundImage: "url(" + props.image + ")",
      }}
    ></CircleContainer>
  );
};
