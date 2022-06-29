import React from "react";
import styled from "styled-components";
import { Button, ContentContainer, TitleText } from "../../shared/components";

export const LandingPage = () => {
  return (
    <Container>
      <TitleText>Canvassa</TitleText>
      <ContentContainer>
        <ButtonContainer>
          <Button>Public Rooms</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button href="./rooms/create">Create a Room</Button>
        </ButtonContainer>
        <TitleText style={{ fontSize: "1.5rem" }}>Copyrighted 2022</TitleText>
      </ContentContainer>
    </Container>
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
