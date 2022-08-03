import React, { useState } from "react";
import styled from "styled-components";
import {
  Background,
  Button,
  ContentContainer,
  ErrorText,
  JoinRoomModal,
  CanvassaText,
} from "../../shared/components";
import { useNavigate } from "react-router-dom";
import { APP_TITLE, getPaths } from "../../shared/constants";
import { RoomCard } from "./RoomCard";
import { useAppDataApi } from "../../shared/api";
import { useEffect } from "react";

export const CreateRoomPage = () => {
  const navigate = useNavigate();
  const { getRoomModes } = useAppDataApi();

  const [open, setOpen] = useState(false);

  /* The following states are to be used for getting the room modes
     from the backend. They are currently unused in the render since
     the getRoomModes endpoint fails (a bug to be fixed).
  */
  const [roomModes, setRoomModes] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (roomModes !== null) return;
    getRoomModes().then((data) => {
      if (!data || data.errors) {
      }
      // setError(`Error: ${data?.errors[0] ?? "Unknown error"}`);
      else {
        setRoomModes(
          data.roomModes.map((roomMode) => ({
            ...roomMode,
            onClick: roomMode.disabled ? () => {} : () => setOpen(true),
          }))
        );
        setError("");
      }
    });
  }, [roomModes]);

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
      <Background>
        <Container>
          <CanvassaText>{APP_TITLE}</CanvassaText>
          <ContentContainer>
            <SubtitleText style={{ color: "#767676" }}>
              Create a private room and invite your friends!
            </SubtitleText>
            <RoomCardsContainer>
              {error ? (
                <ErrorText error={error} />
              ) : (
                /* A bug exists that forces the getRoomModes API call
                   to fail. The data is stored on the frontend as a
                   substitute, as it does not have any security leaks
                */
                ROOM_TYPES.map((roomType, i) => (
                  <RoomCard
                    key={i}
                    title={roomType.title}
                    desc={roomType.desc}
                    disabled={roomType.disabled}
                    onClick={roomType.onClick}
                  />
                ))
              )}
            </RoomCardsContainer>
            <ButtonContainer>
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
      </Background>
      <JoinRoomModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5rem;
`;

const SubtitleText = styled(CanvassaText)`
  font-size: 4rem;
  text-align: center;
  margin-top: 2rem;
`;

const RoomCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
`;

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
`;
