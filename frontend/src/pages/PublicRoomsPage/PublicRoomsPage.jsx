import React from "react";
import styled, { keyframes } from "styled-components";
import {
  Button,
  ContentContainer,
  TitleText,
  SubTitleText,
  RoomComponent,
} from "../../shared/components";
import backgroundimg from "../../assets/images/math-transparent-background-30.png";
import { PATHS } from "../../shared/constants";
import { Grid } from "@mui/material";
import {useNavigate} from "react-router-dom";

export const PublicRoomsPage = () => {
  const navigate = useNavigate();
  const goToLandingPage = ()=> {navigate(PATHS.LANDING_PAGE , {replaced:true});};

  return (
    <Background>
      <Container>
        <TitleText>Canvassa</TitleText>
        <ContentContainer>
          <SubTitleText>Public Rooms</SubTitleText>
          <RoomsContainer>
            <Grid
              container
              direction="row"
              justifyContent="spaced-between"
              alignItems="flex-center"
              rowSpacing={10}
              columnSpacing={{ xs: 4, sm: 4, md: 4, lg: 4, xl:4}}
              columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl:20 }}
            >
              <Grid item xs={4} sm={4} md={4}>
                <RoomComponent name="Best Room" players="0" />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <RoomComponent name="Doodling" players="5" color="#ffdb0e" />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <RoomComponent name="Fun Time" players="10" color="#3e902f" />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <RoomComponent name="Room1" players="10" />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <RoomComponent name="Best Room" players="0" />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <RoomComponent name="Doodling" players="5" color="#ffdb0e" />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <RoomComponent name="Fun Time" players="10" color="#3e902f" />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <RoomComponent name="Room1" players="10" />
              </Grid>
            </Grid>
          </RoomsContainer>
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
  padding: 5em;
  margin-bottom: 5em;
  border-radius: 1em;
  background-color: #62626b;
`;

const ButtonContainer = styled.div`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BackgroundAnimation = keyframes`
    0%   {background-color:rgb(178, 29, 29);   background-size: 1000px;}
    25%  {background-color:yellow;   background-size: 3000px;}
    50%  {background-color:rgb(25, 25, 179);background-size: 500px;}
    75%  {background-color:green;background-size: 1500px;}
    100% {background-color:red;background-size: 1000px;}
`;

const Background = styled.div`
  height:fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: url(${backgroundimg});
  background-repeat: repeat;
  background-size: 1000px;
  background-position: fixed;
  background-position-x: 50%;
  background-position-y: 50%;
  position: relative;
  animation-name: ${BackgroundAnimation};
  animation-duration: 100s;
  animation-iteration-count: infinite;
`;
