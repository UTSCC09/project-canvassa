import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundimg from "../../assets/images/math-transparent-background-30.png";

export const Background = (props) => {
  return <BackgroundWrapper>{props.children}</BackgroundWrapper>;
};

const BackgroundAnimation = keyframes`
    0%   {background-color:rgb(178, 29, 29);   background-size: 1000px;}
    25%  {background-color:yellow;   background-size: 3000px;}
    50%  {background-color:rgb(25, 25, 179);background-size: 500px;}
    75%  {background-color:green;background-size: 1500px;}
    100% {background-color:red;background-size: 1000px;}
`;

const BackgroundWrapper = styled.div`
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: url(${backgroundimg});
  background-repeat: repeat;
  background-size: 1000px;
  background-position: fixed;
  background-position-x: 50%;
  background-position-y: 50%;
  animation-name: ${BackgroundAnimation};
  animation-duration: 100s;
  animation-iteration-count: infinite;
`;
