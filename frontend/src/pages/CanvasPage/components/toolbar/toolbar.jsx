import React, { useState } from "react";
import styled from "styled-components";
import { Brush } from "./Brush";
import { ColorPicker } from "./ColorPicker";
import { Eraser } from "./Eraser";
import { Stroke } from "./Stroke";
import { StrokeMenu } from "./StrokeMenu";
import { InsertText } from "./InsertText";
import { InsertImage } from "./InsertImage";
import { InsertShape } from "./InsertShape";
import { Undo } from "./Undo";
import { Redo } from "./Redo";

export const ToolBar = (props) => {
  //States
  const [s, sets] = useState(0);
  return (
    <ToolBarContainer>
      <Brush />
      <Eraser />
      <ColorPicker />
      <Stroke />
      <InsertText />
      <InsertImage />
      <InsertShape />
      <Undo onClick={props.handlers.UndoHandler} />
      <Redo onClick={props.handlers.RedoHandler} />
    </ToolBarContainer>
  );
};

const ToolBarContainer = styled.div`
  width: 70vw;
  height: 10vh;
  background-color: #d9d9d9;
  position: -webkit-sticky; /* Safari */
  position: fixed;
  bottom: 0;
  left: 15vw;
  border-radius: 3vh 3vh 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
