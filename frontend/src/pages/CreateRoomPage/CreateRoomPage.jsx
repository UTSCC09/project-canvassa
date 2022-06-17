import React from "react";
import styled from "styled-components";
import { Button, TitleText } from "../../shared/components";

export const CreateRoomPage = () => {
  return (<Container>
    <TitleText>Canvassa</TitleText>
    <ContentContainer>
      <TitleText style={{ fontSize: "1.5rem" }}>Create a Room</TitleText>
      <TitleText style={{ fontSize: "1.25rem" }}>
        Create a private room and invite your friends!
      </TitleText>
      <ContentContainer>
        <TitleText style={{ fontSize: "1.25rem" }}>Normal</TitleText>
        <TitleText style={{ fontSize: "1.25rem" }}>
          Have fun drawing with your friends.
        </TitleText>
      </ContentContainer>
      <ContentContainer>
        <TitleText style={{ fontSize: "1.25rem" }}>Round Robin</TitleText>
        <TitleText style={{ fontSize: "1.25rem" }}>
          Get a prompt and take turns drawing it!
        </TitleText>
      </ContentContainer>
      <ContentContainer>
        <TitleText style={{ fontSize: "1.25rem" }}>Presenting</TitleText>
        <TitleText style={{ fontSize: "1.25rem" }}>
          Have a large audience and few presenters that control the canvas
        </TitleText>
      </ContentContainer>
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

export const ContentContainer = styled.div`
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
