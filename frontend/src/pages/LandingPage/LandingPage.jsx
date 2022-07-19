import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthApi } from "../../shared/api";
import {
  Button,
  ContentContainer,
  JoinRoomModal,
  TitleText,
} from "../../shared/components";
import { getPaths } from "../../shared/constants";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthApi();

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    if (!isLoggedIn()) navigate(getPaths.getAuthPage(), { replaced: true });
  });

  return (
    <>
      <Container>
        <TitleText>Canvasa</TitleText>
        <ContentContainer>
          <ButtonContainer>
            <Button>Public Rooms</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button>Create a Room</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button
              onClick={() =>
                navigate(getPaths.getAuthPage(), { replaced: true })
              }
            >
              Profile
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button onClick={openModal}>Join Room</Button>
          </ButtonContainer>
          <TitleText style={{ fontSize: "1.5rem" }}>Copyrighted 2022</TitleText>
        </ContentContainer>
      </Container>
      <JoinRoomModal isOpen={open} onClose={closeModal} />
    </>
  );
};

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  background: #f0a8a8;
  height: calc(100vh - 4em);
  width: calc(100vw - 4em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2em;
`;