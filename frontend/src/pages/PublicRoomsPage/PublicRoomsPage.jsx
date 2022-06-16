import React from "react";
import styled from "styled-components";
import { Button, ContentContainer, TitleText, SubTitleText} from "../../shared/components";
import {PATHS} from "../../shared/constants";
export const PublicRoomsPage = () => {


  return (
    <Container>
      <TitleText>Canvassa</TitleText>
      <ContentContainer>
        <SubTitleText>Public Rooms</SubTitleText>
        <ButtonContainer>
          <Button href={PATHS.LANDING_PAGE}>Back</Button>
        </ButtonContainer>
        <TitleText style={{ fontSize: "1.5rem" }}>Copyrighted 2022</TitleText>
      </ContentContainer>
    </Container>
  )


}

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
