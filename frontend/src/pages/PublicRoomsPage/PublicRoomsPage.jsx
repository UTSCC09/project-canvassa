import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  ContentContainer,
  TitleText,
  SubTitleText,
  RoomComponent,
  Background,
  ErrorText,
} from "../../shared/components";
import { getPaths } from "../../shared/constants";
import { useNavigate } from "react-router-dom";
import { useAppDataApi } from "../../shared/api";
import { useEffect } from "react";

const COLOURS = ["#ffdb0e", "#3e902f", "#d05f5f"];

export const PublicRoomsPage = () => {
  const navigate = useNavigate();
  const { getPublicRooms } = useAppDataApi();
  const [publicRooms, setPublicRooms] = useState(null);

  const goToLandingPage = () => {
    navigate(getPaths.getLandingPage(), { replaced: true });
  };

  const PUBLIC_ROOMS = [
    { _id: -1, name: "Public Rooms 1", members: [] },
    { _id: -1, name: "Public Rooms 2", members: [] },
    { _id: -1, name: "Public Rooms 3", members: [] },
  ];

  useEffect(() => {
    if (publicRooms !== null) return;
    getPublicRooms().then((data) => {
      data && setPublicRooms(data.publicRooms);
    });
  }, [publicRooms]);

  return (
    <Background>
      <Container>
        <TitleText>Canvassa</TitleText>
        <ContentContainer>
          <SubTitleText>Public Rooms</SubTitleText>
          {publicRooms === null ? (
            <ErrorText error="Error: Could not retrieve public rooms" />
          ) : (
            <RoomsContainer>
              {publicRooms.map((publicRoom, i) => (
                <RoomComponent
                  name={publicRoom.name}
                  players={publicRoom.members.length}
                  key={i}
                  color={COLOURS[i % COLOURS.length]}
                  onClick={() => {
                    if (publicRoom._id === -1) return;
                    navigate(getPaths.getRoomPage(publicRoom._id), {
                      replaced: true,
                    });
                  }}
                />
              ))}
            </RoomsContainer>
          )}
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
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  background-color: #62626b;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
