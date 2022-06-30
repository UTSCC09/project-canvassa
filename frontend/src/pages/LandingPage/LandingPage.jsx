import React from "react";
<<<<<<< HEAD
import styled, {keyframes} from "styled-components";
import { Button, ContentContainer, TitleText, Markers } from "../../shared/components";
import backgroundimg from "../../assets/images/math-transparent-background-30.png";
import {PATHS} from "../../shared/constants";
=======
import styled from "styled-components";
import { Button, ContentContainer, TitleText } from "../../shared/components";
>>>>>>> e1e5771 (fixed bugs caused by test commit)

export const LandingPage = () => {
  return (
    <Background>
    <Container>
      <TitleText>Canvassa</TitleText>
      <ContentContainer>
        <ButtonContainer>
          <Button>Public Rooms</Button>
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
<<<<<<< HEAD
=======
  background: #f0a8a8;
  height: calc(100vh - 4em);
  width: calc(100vw - 4em);
>>>>>>> e1e5771 (fixed bugs caused by test commit)
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
<<<<<<< HEAD
`

const BackgroundAnimation = keyframes`
    0%   {background-color:rgb(178, 29, 29);   background-size: 1000px;}
    25%  {background-color:yellow;   background-size: 3000px;}
    50%  {background-color:rgb(25, 25, 179);background-size: 500px;}
    75%  {background-color:green;background-size: 1500px;}
    100% {background-color:red;background-size: 1000px;}
`

const Background = styled.div`
  height:100vh;
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
=======
  padding: 2em;
>>>>>>> e1e5771 (fixed bugs caused by test commit)
`;
