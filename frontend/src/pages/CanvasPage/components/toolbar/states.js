import { atom } from "recoil";
import { BRUSH } from "./constants";

export const brushSettings = atom({
  key: "brushsettings",
  default: createBrushSettings(),
});

export const textSettings = atom({
  key: "textSettings",
  default: createTextSettings(),
});

function createBrushSettings() {
  const module = {
    size: 5,
    opacity: 100,
    type: "pencil",
    color: "black",
  };

  //Getter and Setter also checks for errors
  module.setSize = (value) => {
    module.brushsize = value;
  };
  module.getSize = () => module.brushsize;
  module.setOpacity = (value) => {
    if (0 <= value <= 100) {
      module.opacity = value;
    } else {
      throw "opacity out of range [0,100]";
    }
  };
  module.getOpacity = () => module.opacity;
  module.setType = (value) => {
    if (value in BRUSH.TYPES) {
      module.type = value;
    } else {
      throw "value not in BRUSH.TYPES";
    }
  };
  module.getType = () => module.type;
  module.setColor = (value) => {
    module.color = value;
  };
  module.getColor = () => module.color;

  return module;
}

function createTextSettings() {
  const module = {
    font: "Calibri",
    fontSize: 12,
    colour: "blue",
  };

  module.setFontSize = (value) => {
    if (4 <= value <= 96) {
      module.opacity = value;
    } else {
      throw "font size out of range [0,96]";
    }
  };
  module.getSize = () => module.fontSize;
  module.setFont = (value) => {
    module.font = value;
  };
  module.getFont = () => module.font;
  module.setColour = (value) => {
    module.colour = value;
  };
  module.getColour = () => module.colour;

  return module;
}
