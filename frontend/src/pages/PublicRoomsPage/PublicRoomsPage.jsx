import React from "react";
import styled from "styled-components";
import {
  Button,
  ContentContainer,
  TitleText,
  SubTitleText,
  RoomComponent,
  Background,
} from "../../shared/components";
import { getPaths } from "../../shared/constants";
import { useNavigate } from "react-router-dom";

export const PublicRoomsPage = () => {
  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate(getPaths.getLandingPage(), { replaced: true });
  };

  return (
    <Background>
      <Container>
        <TitleText>Canvassa</TitleText>
        <ContentContainer>
          <SubTitleText>Public Rooms</SubTitleText>
          <RoomsContainer>
            <RoomComponent name="Best Room" players="0" />

            <RoomComponent name="Doodling" players="5" color="#ffdb0e" />

            <RoomComponent name="Fun Time" players="10" color="#3e902f" />

            <RoomComponent name="Room1" players="10" />

            <RoomComponent name="Best Room" players="0" />

            <RoomComponent name="Doodling" players="5" color="#ffdb0e" />

            <RoomComponent name="Fun Time" players="10" color="#3e902f" />

            <RoomComponent name="Room1" players="10" />
          </RoomsContainer>
          <ButtonContainer>
            <Button onClick={goToLandingPage}>Back</Button>
          </ButtonContainer>
          <TitleText style={{ fontSize: "1.5rem" }}>Copyrighted 2022</TitleText>
        </ContentContainer>
      </Container>
    </Background>
  );
};

const RoomsContainer = styled.div`
  padding: 5em;
  margin-bottom: 5em;
  border-radius: 1em;
  background-color: #62626b;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  grid-gap: 3rem;
  width: 90vh;
  max-width: 200em;
`;

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5rem 0;
`;
