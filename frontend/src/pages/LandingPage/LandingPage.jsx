import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthApi } from "../../shared/api";
import {
  Button,
  ContentContainer,
  CanvassaText,
  Markers,
  Background,
} from "../../shared/components";
import { APP_TITLE, getPaths } from "../../shared/constants";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthApi();

  useEffect(() => {
    if (!isLoggedIn()) navigate(getPaths.getAuthPage(), { replaced: true });
  });

  return (
    <Background>
      <Container>
        <CanvassaText>{APP_TITLE}</CanvassaText>
        <ContentContainer>
          <ButtonContainer>
            <Button
              onClick={() =>
                navigate(getPaths.getCreateRoomsPage(), { replaced: true })
              }
            >
              Create a Room
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button
              onClick={() =>
                navigate(getPaths.getAuthPage(), { replaced: true })
              }
            >
              Profile
            </Button>
          </ButtonContainer>
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
  padding: 5rem;
`;
