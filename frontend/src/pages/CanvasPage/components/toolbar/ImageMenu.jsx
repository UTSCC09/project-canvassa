import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export const ImageMenu = (props) => {
  const fileTypes = ["JPG", "PNG", "GIF"];

  const card_position = {
    position: "absolute",
    top: "-15em",
    right: "15vw",
  };

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Insert an image
        </Typography>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        ></FileUploader>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }} style={card_position}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
