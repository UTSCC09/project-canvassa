import React from "react";
import styled from "styled-components";
import { ContentContainer, TitleText } from "../../shared/components";

export const RoomCard = ({
  title,
  desc,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <Container disabled={disabled} onClick={onClick}>
      <Title disabled={disabled}>{title}</Title>
      <Description disabled={disabled}>{desc}</Description>
    </Container>
  );
};

const Container = styled(ContentContainer)`
  border: solid ${(props) => (props.disabled ? "#cecdcd;" : "black")};
  cursor: ${(props) => (props.disabled ? "inherit" : "pointer")};
`;

const Title = styled(TitleText)`
  font-size: 2.5rem;
  text-align: center;
  ${(props) => (props.disabled ? "color: #cecdcd;" : "")}
`;

const Description = styled(TitleText)`
  font-size: 2.25rem;
  text-align: center;
  color: #767676;
  ${(props) => (props.disabled ? "color: #cecdcd;" : "")}
`;
