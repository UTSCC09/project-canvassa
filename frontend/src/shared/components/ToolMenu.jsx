import React from "react";
import styled from "styled-components";
import {MenuItem} from "./";

export const ToolMenu = (props) => {
  return (<MenuBar><MenuItem color="red"/>
  <MenuItem color="blue"/>
  <MenuItem color="green"/>
  <MenuItem color="black"/></MenuBar>);
};

const MenuBar = styled.div`
    width: 70vw;
    height: 10vh;
    background-color: #D9D9D9;
    position: -webkit-sticky; /* Safari */
    position: fixed;
    bottom: 0;
    left: 15vw;
    border-radius: 3vh 3vh 0 0;
    display:flex;
    align-items: center;
`;