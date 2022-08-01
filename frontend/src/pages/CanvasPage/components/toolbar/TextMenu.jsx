import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React from "react";
import { useRecoilState } from "recoil";
import { textSettings } from "./states";

export const TextMenu = (props) => {
  const [settings, setSettings] = useRecoilState(textSettings);

  function onChangeFont(e) {
    setSettings({...settings, font: e.target.value});
  }

  function onChangeFontSize(e) {
    setSettings({...settings, fontSize: e.target.value});
  }

  function onChangeColour(e) {
    setSettings({...settings, colour: e.target.value});
  }

  const card_position = {
    position: "absolute",
    top: "-30em",
    right: "25vw",
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5' component='div'>
          Text Settings
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Font
        </Typography>
        <Select
          labelId="demo-simple-select-label2"
          id='demo-simple-select2'
          value={settings.font}
          label='Font'
          onChange={onChangeFont}>
          <MenuItem value={"Calibri"}>Calibri</MenuItem>
          <MenuItem value={"Times New Roman"}>Times New Roman</MenuItem>
          <MenuItem value={"Arial"}>Arial</MenuItem>
        </Select>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Font Size
        </Typography>
        <Slider
          onChange={onChangeFontSize}
          size='small'
          step={4}
          min={4}
          max={96}
          defaultValue={16}
          aria-label='Small'
          valueLabelDisplay='auto'
        />
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Colour
        </Typography>
        <Select
          labelId="demo-simple-select-label3"
          id='demo-simple-select3'
          value={settings.colour}
          label='Colour'
          onChange={onChangeColour}>
          <MenuItem value={"Blue"}>Blue</MenuItem>
          <MenuItem value={"Red"}>Red</MenuItem>
          <MenuItem value={"Black"}>Black</MenuItem>
        </Select>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }} style={card_position}>
      <Card variant='outlined'>{card}</Card>
    </Box>
  );
};
