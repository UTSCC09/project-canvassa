import React from "react";
import { ToolItem } from "./ToolItem";
import undoimg from "../assets/images/undo.svg";

export const Undo = (props) => {
  return <ToolItem onClick={props.onClick} color="#a9a2f6" image={undoimg} />;
};
