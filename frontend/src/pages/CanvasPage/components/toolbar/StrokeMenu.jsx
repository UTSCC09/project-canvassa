import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { useRecoilState } from "recoil";
import { brushSettings } from "./states";

export const StrokeMenu = (props) => {
  const [settings, setSettings] = useRecoilState(brushSettings);

  function onChangeType(e) {
    setSettings({ ...settings, type: e.target.value });
  }

  function onChangeSize(e) {
    setSettings({ ...settings, size: e.target.value });
  }

  function onChangeOpacity(e) {
    setSettings({ ...settings, opacity: e.target.value });
  }

  const card_position = {
    position: "relative",
    top: "-20em",
    right: "10em",
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h5' component='div'>
          Stroke
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          brush size
        </Typography>
        <Slider
          onChange={onChangeSize}
          size='small'
          step={1}
          min={0}
          max={100}
          defaultValue={10}
          aria-label='Small'
          valueLabelDisplay='auto'
        />
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          opacity
        </Typography>
        <Slider
          onChange={onChangeOpacity}
          size='small'
          step={1}
          min={0}
          max={100}
          defaultValue={100}
          aria-label='Small'
          valueLabelDisplay='auto'
        />
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          brush type
        </Typography>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={settings.type}
          label='Brush Type'
          onChange={onChangeType}>
          <MenuItem value={"pencil"}>Pencil</MenuItem>
          <MenuItem value={"marker"}>Marker</MenuItem>
          <MenuItem value={"crayon"}>Crayon</MenuItem>
          <MenuItem value={"paintbrush"}>Paint Brush</MenuItem>
          <MenuItem value={"spraycan"}>SprayCan</MenuItem>
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
