import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  ContentContainer,
  ErrorText,
  Textfield,
} from "../../shared/components";
import { useLocation, useNavigate } from "react-router-dom";
import { getPaths } from "../../shared/constants";
import { useAuthApi } from "../../shared/api";

export const AuthPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, signin, signout, signup } = useAuthApi();
  const location = useLocation();
  const returnToUrl = new URLSearchParams(location.search).get("returnTo");

  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authResolveHandler = (data) => {
    if (!data || data.errors)
      setError(`Error: ${data?.errors[0] ?? "Unknown error"}`);
    else if (data.url) {
      navigate(data.url, { replaced: true });
    } else {
      setLoggedIn(isLoggedIn());
      setError("");
    }
  };
  const signupHandler = () => {
    signup(username, password, returnToUrl).then(authResolveHandler);
  };

  const signinHandler = () => {
    signin(username, password, returnToUrl).then(authResolveHandler);
  };

  const signoutHandler = () => {
    signout().then(authResolveHandler);
  };

  return (
    <Container>
      <ContentContainer>
        {!loggedIn ? (
          <>
            <ButtonContainer>
              <Textfield
                text={username}
                setText={setUsername}
                placeholder={"Enter username"}
              />
            </ButtonContainer>
            <ButtonContainer>
              <Textfield
                text={password}
                setText={setPassword}
                placeholder={"Enter password"}
                type={"password"}
              />
            </ButtonContainer>
            <ErrorText error={error} />
            <ButtonContainer>
              <Button onClick={signinHandler}>Sign In</Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button onClick={signupHandler}>Sign Up</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <ButtonContainer>
              <Button onClick={signoutHandler}>Sign Out</Button>
            </ButtonContainer>
            <ErrorText error={error} />
          </>
        )}
        {loggedIn && (
          <>
            <ButtonContainer>
              <Button
                onClick={() =>
                  navigate(getPaths.getLandingPage(), { replaced: true })
                }
              >
                Back
              </Button>
            </ButtonContainer>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
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
