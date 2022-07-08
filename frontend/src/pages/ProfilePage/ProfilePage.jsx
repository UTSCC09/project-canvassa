import React from "react";
import styled from "styled-components";
import { Button, ContentContainer, TitleText } from "../../shared/components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../shared/constants";

export const ProfilePage = () => {
  const { isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const loginHandler = () => {
    loginWithRedirect();
  };

  const logoutHandler = () => {
    logout({ returnTo: window.location.origin });
  };

  if (isLoading) return null;

  return (
    <Container>
      <ContentContainer>
        <TitleText>Profile</TitleText>
        <ButtonContainer>
          {isAuthenticated ? (
            <Button onClick={logoutHandler}>Log Out</Button>
          ) : (
            <Button onClick={loginHandler}>Log In</Button>
          )}
        </ButtonContainer>
        <ButtonContainer>
          <Button
            onClick={() => navigate(PATHS.LANDING_PAGE, { replaced: true })}
          >
            Back
          </Button>
        </ButtonContainer>
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
