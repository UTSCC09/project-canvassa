import React, { useState } from "react";
import { ToolItem } from "./toolitem";
import imageimg from "../../assets/images/image.svg";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from "recoil";
import { ImageMenu } from "./ImageMenu";

export const InsertImage = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <div><ToolItem color='#f6a2a2' image={imageimg} onClick={toggleMenu}>
      </ToolItem>
      {menuVisible ? <ImageMenu /> : null}
      </div>
  );
};
