import React, { useState } from "react";
import { ToolItem } from "./toolitem";
import textimg from "../../assets/images/text.svg";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from "recoil";
import { textSettings } from "./states";
import { TextMenu } from "./TextMenu";

export const InsertText = (props) => {
  const settings = useRecoilValue(textSettings);
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <div><ToolItem color='#f6a2a2' image={textimg} onClick={toggleMenu}>
      
      </ToolItem>
      {menuVisible ? <TextMenu /> : null}
      </div>

  );
};
