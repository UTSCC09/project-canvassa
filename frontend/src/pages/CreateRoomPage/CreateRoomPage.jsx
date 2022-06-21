import React from "react";
import styled from "styled-components";
import { Button, TitleText } from "../../shared/components";

export const CreateRoomPage = () => {
  return (
    <Container>
      <TitleText>Canvassa</TitleText>
      <ContentContainer style={{ background: "#f2f2f2" }}>
        <TitleText style={{ fontSize: "4rem" }}>Create a Room</TitleText>
        <TitleText style={{ fontSize: "3rem", color: "#767676" }}>
          Create a private room and invite your friends!
        </TitleText>
        <GridContainer>
          <ContentContainer>
            <TitleText style={{ fontSize: "2.5rem" }}>Normal</TitleText>
            <TitleText style={{ fontSize: "2.25rem" }}>
              Have fun drawing with your friends.
            </TitleText>
          </ContentContainer>
          <ContentContainer>
            <TitleText style={{ fontSize: "2.5rem" }}>Round Robin</TitleText>
            <TitleText style={{ fontSize: "2.25rem" }}>
              Get a prompt and take turns drawing it!
            </TitleText>
          </ContentContainer>
          <ContentContainer>
            <TitleText style={{ fontSize: "2.5rem" }}>Presenting</TitleText>
            <TitleText style={{ fontSize: "2.25rem" }}>
              Have a large audience and few presenters that control the canvas
            </TitleText>
          </ContentContainer>
        </GridContainer>
        <ButtonContainer>
          <Button>Back</Button>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const ContentContainer = styled.div`
  background: #e7e7e7;
  border-radius: 2.5rem;
  padding: 1em;
  min-width: 10%;
  min-height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: fit-content;
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
