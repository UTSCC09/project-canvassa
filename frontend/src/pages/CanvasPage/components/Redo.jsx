import React from "react";
import { ToolItem } from "./ToolItem";
import redoimg from "../assets/images/redo.svg";

export const Redo = (props) => {
  return <ToolItem onClick={props.onClick} color="#a9a2f6" image={redoimg} />;
};
