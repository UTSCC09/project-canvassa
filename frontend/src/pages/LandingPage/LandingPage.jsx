import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthApi } from "../../shared/api";
import { Button, 
  ContentContainer, 
  TitleText, 
  Markers,
  Background } from "../../shared/components";
import { getPaths } from "../../shared/constants";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthApi();

  useEffect(() => {
    if (!isLoggedIn()) navigate(getPaths.getAuthPage(), { replaced: true });
  });

  const goToPublicRoomsPage = () => {
    navigate(getPaths.getPublicRoomsPage(), { replaced: true });
  };
  const goToCanvasPage = () => {
    navigate(getPaths.getCanvasPage(), { replaced: true });
  };

  return (
    <Background>
      <Container>
        <TitleText>Canvassa</TitleText>
        <ContentContainer>
          <ButtonContainer>
             <Button onClick={goToCanvasPage}>Create Canvas</Button>
           </ButtonContainer>
           <ButtonContainer>
             <Button onClick={goToPublicRoomsPage}>Public Rooms</Button>
           </ButtonContainer>
           <ButtonContainer>
             <Button
               onClick={() =>
                 navigate(getPaths.getCreateRoomsPage(), { replaced: true })
               }>
               Create a Room
             </Button>
           </ButtonContainer>
           <ButtonContainer>
             <Button
               onClick={() => navigate(getPaths.getAuthPage(), { replaced: true })}
             >
               Profile
             </Button>
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
