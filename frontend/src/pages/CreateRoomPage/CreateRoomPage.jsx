import React, { useState } from "react";
import styled from "styled-components";
import { Button, JoinRoomModal, TitleText } from "../../shared/components";
import { useNavigate } from "react-router-dom";
import { getPaths } from "../../shared/constants";
import { RoomCard } from "./RoomCard";

export const CreateRoomPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const ROOM_TYPES = [
    {
      title: "Normal",
      desc: "Have fun drawing with your friends.",
      disabled: false,
      onClick: () => setOpen(true),
    },
    {
      title: "Round Robin",
      desc: "Get a prompt and take turns drawing it!",
      disabled: true,
      onClick: () => {},
    },
    {
      title: "Presenting",
      desc: "Have a large audience and few presenters that control the canvas",
      disabled: true,
      onClick: () => {},
    },
  ];

  return (
    <>
      <Container>
        <TitleText>Canvassa</TitleText>
        <ContentContainer style={{ background: "#f2f2f2", width: "85%" }}>
          <TitleText style={{ fontSize: "6rem", textAlign: "center" }}>
            Create a Room
          </TitleText>
          <TitleText
            style={{
              fontSize: "4rem",
              textAlign: "center",
              marginTop: "2rem",
              color: "#767676",
            }}
          >
            Create a private room and invite your friends!
          </TitleText>
          <GridContainer>
            {ROOM_TYPES.map((roomType, i) => (
              <RoomCard
                key={i}
                title={roomType.title}
                desc={roomType.desc}
                disabled={roomType.disabled}
                onClick={roomType.onClick}
              />
            ))}
          </GridContainer>
          <ButtonContainer style={{ marginTop: "2rem" }}>
            <Button
              onClick={() =>
                navigate(getPaths.getLandingPage(), { replaced: true })
              }
            >
              Back
            </Button>
          </ButtonContainer>
        </ContentContainer>
      </Container>
      <JoinRoomModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 30rem 30rem;
  grid-row: auto auto;
  column-gap: 2rem;
  row-gap: 2rem;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 90%;
  justify-content: center;
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
