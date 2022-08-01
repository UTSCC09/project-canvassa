import { TextField } from "@mui/material";
import React from "react";

export const Textfield = ({
  text,
  setText,
  textSize = "1.8rem",
  placeholder = "",
  ...props
}) => (
  <TextField
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder={placeholder}
    fullWidth
    InputProps={{
      style: {
        fontSize: textSize,
        color: "#333333",
        borderRadius: "1.5rem",
      },
    }}
    inputProps={{
      style: {
        padding: "1rem",
      },
    }}
    {...props}
  />
);
