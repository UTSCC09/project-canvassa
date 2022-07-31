import React, { useState } from "react";
import { ToolItem } from "./toolitem";
import styled from "styled-components";
import { ReactComponent as ScribbleImage } from "../../assets/images/scribble.svg";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { brushSettings } from "./states";
import { CircleContainer } from "./styling";
import { StrokeMenu } from "./StrokeMenu";

export const Stroke = (props) => {
  const settings = useRecoilValue(brushSettings);
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <>
      <CircleContainer onClick={toggleMenu}>
        {menuVisible ? <StrokeMenu /> : null}
        <ScribbleImage style={{ fill: settings.color }} />
      </CircleContainer>
    </>
  );
};
