import React from "react";
import { ToolItem } from "./toolitem";
import eraserimg from "../../assets/images/eraser.svg";

export const Eraser = (props) => {
  return <ToolItem color='#a2c9f6' image={eraserimg} />;
};
