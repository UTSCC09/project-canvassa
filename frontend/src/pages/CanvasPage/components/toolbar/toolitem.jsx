import React from "react";
import styled from "styled-components";
import { CircleContainer } from "./styling";

// const ToolButton = styled.div`
//   height: 3em;
//   width: 3em;
//   margin: 0em 5em;
//   border-radius: 5em;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: contain;
//   border-width: 1em;
//   border-style: solid;
//   padding: 0.5em;
//   border-color: rgba(0, 0, 0, 0);
//   caret-color: transparent;
//   &:hover {
//     box-shadow: 0 0 0.5em 0em #000000;
//   }
// `;

export const ToolItem = (props) => {
  const component = (
    <CircleContainer
      onClick={props.onClick}
      style={{
        ...props.style,
        backgroundColor: (() => (props.color ? props.color : "white"))(),
        backgroundImage: "url(" + props.image + ")",
      }}></CircleContainer>
  );

  return component;
};
