import React from "react";
import styled, { keyframes } from "styled-components";
import {
  Button,
  ContentContainer,
  TitleText,
  Markers,
} from "../../shared/components";
import backgroundimg from "../../assets/images/math-transparent-background-30.png";
import { PATHS } from "../../shared/constants";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const goToPublicRoomsPage = () => {
    navigate(PATHS.PUBLIC_ROOMS_PAGE, { replaced: true });
  };

  return (
    <Background>
      <Container>
        <TitleText>Canvassa</TitleText>
        <ContentContainer>
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

const BackgroundAnimation = keyframes`
    0%   {background-color:rgb(178, 29, 29);   background-size: 1000px;}
    25%  {background-color:yellow;   background-size: 3000px;}
    50%  {background-color:rgb(25, 25, 179);background-size: 500px;}
    75%  {background-color:green;background-size: 1500px;}
    100% {background-color:red;background-size: 1000px;}
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: url(${backgroundimg});
  background-repeat: repeat;
  background-size: 1000px;
  background-position: fixed;
  background-position-x: 50%;
  background-position-y: 50%;
  position: relative;
  animation-name: ${BackgroundAnimation};
  animation-duration: 100s;
  animation-iteration-count: infinite;
`;
