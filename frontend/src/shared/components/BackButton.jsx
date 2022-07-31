import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { sizing } from "@mui/system";

export const BackButton = (props) => {
  const size = { minWidth: "5vh", minHeight: "5vh" };

  return (
    <ButtonWrapper>
      <IconButton color='primary' style={size}>
        <ArrowBackIcon style={size} />
      </IconButton>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  position: fixed;
  top: 2em;
  left: 2em;
`;
