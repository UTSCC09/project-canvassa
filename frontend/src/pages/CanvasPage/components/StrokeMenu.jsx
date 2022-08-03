import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { useRecoilState } from "recoil";
import { brushSettings } from "./states";

export const StrokeMenu = () => {
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

  return (
    <Box
      sx={{ minWidth: 275 }}
      style={{
        position: "relative",
        top: "-20em",
        right: "10em",
      }}
    >
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              Stroke
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              brush size
            </Typography>
            <Slider
              onChange={onChangeSize}
              size="small"
              step={1}
              min={0}
              max={100}
              value={settings.size}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              opacity
            </Typography>
            <Slider
              onChange={onChangeOpacity}
              size="small"
              step={1}
              min={0}
              max={100}
              value={settings.opacity}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              brush type
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={settings.type}
              label="Brush Type"
              onChange={onChangeType}
            >
              <MenuItem value={"pencil"}>Pencil</MenuItem>
              <MenuItem value={"marker"}>Marker</MenuItem>
              <MenuItem value={"crayon"}>Crayon</MenuItem>
              <MenuItem value={"paintbrush"}>Paint Brush</MenuItem>
              <MenuItem value={"spraycan"}>SprayCan</MenuItem>
            </Select>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};
