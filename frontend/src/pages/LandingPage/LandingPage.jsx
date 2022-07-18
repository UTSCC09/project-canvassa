import React from "react";
import styled from "styled-components";
import {
  Button,
  ContentContainer,
  TitleText,
  Markers,
  Background
} from "../../shared/components";
import { PATHS } from "../../shared/constants";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const goToPublicRoomsPage = () => {
    navigate(PATHS.PUBLIC_ROOMS_PAGE, { replaced: true });
  };
  const goToCanvasPage = () => {
    navigate(PATHS.CANVAS_PAGE, { replaced: true });
  };

  return (
    <Background>
      <Container>
        <TitleText>Canvassa</TitleText>
        <ContentContainer>
        <ButtonContainer>
            <Button onClick={goToCanvasPage}>Create Canvas</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button onClick={goToPublicRoomsPage}>Public Rooms</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button>Create a Room</Button>
          </ButtonContainer>
          <TitleText style={{ fontSize: "1.5rem" }}>Copyrighted 2022</TitleText>
        </ContentContainer>
      </Container>
      <Markers></Markers>
    </Background>
  );
};

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
