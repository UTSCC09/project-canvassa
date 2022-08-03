import React, { useState } from "react";
import { ReactComponent as ScribbleImage } from "../assets/images/scribble.svg";
import { useRecoilValue } from "recoil";
import { brushSettings } from "./states";
import { CircleContainer } from "./styling";
import { StrokeMenu } from "./StrokeMenu";

export const Stroke = () => {
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
