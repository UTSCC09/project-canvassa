import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUsersApi } from "../../shared/api/usersApi";
import { Button, ContentContainer, TitleText } from "../../shared/components";
import { PATHS } from "../../shared/constants";

export const LandingPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const { updateUser } = useUsersApi();

  useEffect(() => {
    if (isAuthenticated) updateUser(user.email);
  });

  if (isLoading) return null;

  return (
    <Container>
      <TitleText>Canvasa</TitleText>
      <ContentContainer>
        <ButtonContainer>
          <Button>Public Rooms</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button>Create a Room</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            onClick={() => navigate(PATHS.PROFILE_PAGE, { replaced: true })}
          >
            Profile
          </Button>
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
