import React from "react";
import styled, {keyframes} from "styled-components";
import { Button, ContentContainer, TitleText, SubTitleText} from "../../shared/components";
import backgroundimg from "../../assets/images/canvas-small.png";
import peopleicon from "../../assets/images/people-icon.png";
import {PATHS} from "../../shared/constants";

export const RoomComponent = (props) => {

  return (
    <Background> 
        <BottomBar>
            <Name>Test Name</Name>
            <Number>5</Number>
            <PeopleIcon/>
            </BottomBar>
    </Background>
  )


}

const Number = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    flex-grow:1;
`;

const Name = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    flex-grow:5;
    margin:0 0.2em;
    width:5em;
    overflow:hidden;
`;

const PeopleIcon = styled.div`
  height: 3.5em;
  width: 3.5em; 
  background-color: red;
  background:url(${peopleicon});
  background-size: cover;
  margin-right: 0.5em;
`;

const Background = styled.div`
  position: relative;
  height: 15em;
  width: 19em; 
  background:url(${backgroundimg});
  background-size: contain;
  border-radius: 1.5em;
  border-style: solid;
  border-width: 0.5em;
  background-color: #d05f5f; /* Tint color */
  background-blend-mode: multiply;
`;

const BottomBar = styled.div`
    position: absolute;
    bottom: 0px;
    left:-0.05em;
    border-radius: 0em 0em 1em 1em;
    height: 3.5em;
    width: 19.1em;
    background-color: white;
    display:flex;
    align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const BackgroundAnimation = keyframes`
    0%   {background-color:rgb(178, 29, 29);   background-size: 1000px;}
    25%  {background-color:yellow;   background-size: 3000px;}
    50%  {background-color:rgb(25, 25, 179);background-size: 500px;}
    75%  {background-color:green;background-size: 1500px;}
    100% {background-color:red;background-size: 1000px;}
`
