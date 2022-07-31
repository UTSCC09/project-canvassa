import React from "react";
import { useState } from "react";
import { ToolItem } from "./toolitem";
import colorpickerimg from "../../assets/images/colorpicker.svg";
import styled from "styled-components";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { brushSettings } from "./states";
import { CircleContainer } from "./styling";

export const ColorPicker = (props) => {
  const [settings, setSettings] = useRecoilState(brushSettings);

  return (
    <CircleContainer>
      <input
        type='color'
        onChange={(e) => {
          setSettings({ ...settings, color: e.target.value });
        }}
      />
    </CircleContainer>
  );
};
