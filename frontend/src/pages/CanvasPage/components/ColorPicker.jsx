import React from "react";
import { useRecoilState } from "recoil";
import { brushSettings } from "./states";
import { CircleContainer } from "./styling";

export const ColorPicker = () => {
  const [settings, setSettings] = useRecoilState(brushSettings);

  return (
    <CircleContainer>
      <input
        type="color"
        onChange={(e) => {
          setSettings({ ...settings, color: e.target.value });
        }}
      />
    </CircleContainer>
  );
};
