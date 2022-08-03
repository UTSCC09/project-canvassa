import React from "react";
import styled from "styled-components";
import { Brush } from "./Brush";
import { ColorPicker } from "./ColorPicker";
import { Eraser } from "./Eraser";
import { Stroke } from "./Stroke";
import { InsertText } from "./InsertText";
import { InsertImage } from "./InsertImage";
import { InsertShape } from "./InsertShape";
import { Undo } from "./Undo";
import { Redo } from "./Redo";
import { Button } from "@mui/material";
import { CanvassaButtonStyle } from "../../../shared/components/Button";

export const ToolBar = ({ handlers, openNavbar }) => {
  const tools = [
    { comp: <Brush key={1} />, disabled: false },
    { comp: <Eraser key={2} />, disabled: true },
    { comp: <ColorPicker key={3} />, disabled: false },
    { comp: <Stroke key={4} />, disabled: false },
    { comp: <InsertText key={5} />, disabled: true },
    { comp: <InsertImage key={6} />, disabled: true },
    { comp: <InsertShape key={7} />, disabled: true },
    { comp: <Undo onClick={handlers.UndoHandler} key={8} />, disabled: false },
    { comp: <Redo onClick={handlers.RedoHandler} key={9} />, disabled: false },
    {
      comp: (
        <Button
          key={10}
          onClick={() => {
            openNavbar();
          }}
          style={{
            ...CanvassaButtonStyle,
            minWidth: undefined,
            maxWidth: "10rem",
          }}
        >
          Open Menu
        </Button>
      ),
      disabled: false,
    },
  ];

  return (
    <ToolBarContainer>
      {tools.map((tool) => (tool.disabled ? null : tool.comp))}
    </ToolBarContainer>
  );
};

const ToolBarContainer = styled.div`
  width: 70vw;
  height: 10vh;
  padding: 1rem;
  background-color: #d9d9d9;
  position: -webkit-sticky; /* Safari */
  position: fixed;
  bottom: 0;
  left: 15vw;
  border-radius: 3rem 3rem 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
