import React from "react";
import styled, { keyframes } from "styled-components";
import markersimg from "../../assets/images/markers.png";

export const Markers = () => {
  return <MarkersComponent></MarkersComponent>;
};

const slideInAnimation = keyframes`
  0%   {bottom: -100%}
  /* 75%   {width: 375px;height: 375px;} */
  100% {bottom: -15%;}
`;

const MarkersComponent = styled.div`
  background-image: url(${markersimg});
  background-repeat: no-repeat;
  background-size: 30vh;
  animation-name: ${slideInAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  visibility: visible;
  position: fixed;
  bottom: -15%;
  width: 30vh;
  height: 30vh;
`;
