import { IconButton } from "@mui/material";
import styled from "styled-components";
import ClipboardImg from "../../assets/images/clipboard.png";

export const ClipboardButton = ({ onClick = () => {} }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: "#cdcdcd",
        borderRadius: "10%",
        ":hover": { backgroundColor: "#d4d4d4" },
        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
          borderRadius: "10%",
        },
      }}
    >
      <ClipboardIcon />
    </IconButton>
  );
};

const ClipboardIcon = styled.div`
  background-image: url(${ClipboardImg});
  background-size: 2rem;
  width: 2rem;
  height: 2rem;
  visibility: visible;
`;
