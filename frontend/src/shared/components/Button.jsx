import React from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = ({ children, ...props }) => (
  <MuiButton style={CanvassaButtonStyle} {...props}>
    {children}
  </MuiButton>
);

export const CanvassaButtonStyle = {
  fontSize: "1.5rem",
  padding: "0.5rem 2rem",
  background: "#FFFFFF",
  borderRadius: "1.5rem",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
  color: "#333333",
  fontFamily: "Jua",
  minWidth: "30rem",
};
