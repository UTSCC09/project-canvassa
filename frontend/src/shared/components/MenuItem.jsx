import React from "react";
import styled from 'styled-components';

export const MenuItem = (props) => {

  const ColorCircle = styled.div`
  background-color: ${props.color};
  height:5em;
  width: 5em;
  margin:0em 5em;
  border-radius: 5em;
  &:hover{
    border: black;
    border-width: 1em;
    border-style:solid;
  }`;

  return (<ColorCircle></ColorCircle>);
}
