import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { TitleText } from "./TitleText";
import { Textfield } from "./Textfield";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { getPaths } from "../constants";

export const JoinRoomModal = ({ isOpen, onClose }) => {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const createRoomHandler = () => {
    const id = "sa12312312313sadasq2";
    navigate(getPaths.getRoomPage(id), { replaced: true });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="join-room-modal"
      aria-describedby="specify-room-name-and-confirm-join"
    >
      <ContentContainer>
        <StyledBox>
          <ModalTitleText>Create a Room</ModalTitleText>
          <ModalDescText>
            You are about to create a standard canvas room.
          </ModalDescText>
          <ModalInputContainer>
            <ModalLabelText>Room name:</ModalLabelText>
            <Textfield
              text={roomName}
              setText={setRoomName}
              placeholder={"Enter room name"}
              fullWidth={undefined}
            />
          </ModalInputContainer>
          <SubmitButton onClick={createRoomHandler}>Confirm</SubmitButton>
        </StyledBox>
      </ContentContainer>
    </Modal>
  );
};

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const StyledBox = styled(Box)`
  background: #ebebeb;
  padding: 5rem;
  width: 50%;
  border: 2px solid #545454;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const ModalTitleText = styled(TitleText)`
  font-size: 2.5rem;
  text-align: center;
`;

const ModalDescText = styled(TitleText)`
  font-size: 2.25rem;
  text-align: center;
  color: #767676;
`;

const ModalInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalLabelText = styled(TitleText)`
  font-size: 2.25rem;
  text-align: center;
  color: #767676;
  margin-right: 2rem;
`;

const SubmitButton = styled(Button)`
  max-width: 50%;
`;
