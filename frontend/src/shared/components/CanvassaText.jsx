import React from "react";
import styled from "styled-components";

export const CanvassaText = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

const StyledText = styled.span`
  font-family: "Jua";
  font-size: 10rem;
  color: #000000;
`;
