import React from "react";
import styled from "styled-components";
import backgroundimg from "../../assets/images/canvas-small.png";
import peopleicon from "../../assets/images/people-icon.png";

export const RoomComponent = ({ name, players, color }) => {
  return (
    <Background color={color || "#d05f5f"}>
      <BottomBar>
        <Name>{name || "Room Name"}</Name>
        <Number>{players || "5"}</Number>
        <PeopleIcon />
      </BottomBar>
    </Background>
  );
};

const Number = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  flex-grow: 1;
`;

const Name = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  flex-grow: 5;
  margin: 0 0.2em;
  width: 5em;
  overflow: hidden;
`;

const PeopleIcon = styled.div`
  height: 3.5em;
  width: 3.5em;
  background: url(${peopleicon});
  background-size: cover;
  margin-right: 0.5em;
`;

const Background = styled.div`
  margin: 0, 5em;
  position: relative;
  height: 20em;
  width: 25em;
  min-width: 25em;
  background: url(${backgroundimg});
  background-size: contain;
  margin: 0 auto;
  border-radius: 1.5em;
  border-style: solid;
  border-width: 0.5em;
  background-color: ${(props) => props.color}; /* Tint color */
  background-blend-mode: multiply;
  &:hover {
    filter: brightness(85%);
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 0px;
  left: -0.05em;
  border-radius: 0em 0em 1em 1em;
  height: 3.5em;
  width: 25.1em;
  background-color: white;
  display: flex;
  align-items: center;
`;
