import React from "react";
import styled from "styled-components";
import { Button, ContentContainer, TitleText, Markers} from "../../shared/components";
import {PATHS} from '../../shared/constants';

export const LandingPage = () => {
  return (
    <Container>
      <TitleText>Canvassa</TitleText>
      <ContentContainer>
        <ButtonContainer>
          <Button href={PATHS.PUBLIC_ROOMS_PAGE}>Public Rooms</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button>Create a Room</Button>
        </ButtonContainer>
        <TitleText style={{ fontSize: "1.5rem" }}>Copyrighted 2022</TitleText>
      </ContentContainer>
      <Markers/>
    </Container>
  );
};

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  height: calc(100vh - 4em);
  width: calc(100vw - 4em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2em;
`;