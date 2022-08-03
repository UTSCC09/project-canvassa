import { Drawer } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  ClipboardButton,
  ContentContainer,
  CanvassaText,
} from "../../shared/components";
import { getPaths } from "../../shared/constants";

export const Menu = ({ isOpen, onClose, data }) => {
  const navigate = useNavigate();

  if (!data || !data.name || !data.link || !data.members) return null;

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={onClose}>
      <Container>
        <StyledContentContainer>
          <RowContainer>
            <RoomTitle>{data.name}</RoomTitle>
          </RowContainer>
          <RowContainer>
            <RoomLink>{data.link}</RoomLink>
            <ClipboardButtonContainer>
              <ClipboardButton
                onClick={() => navigator.clipboard.writeText(data.link)}
              />
            </ClipboardButtonContainer>
          </RowContainer>
          <RowContainer>
            <RoomMembersCount>Members: {data.members.length}</RoomMembersCount>
          </RowContainer>
          <RowContainer>
            <Button
              onClick={() =>
                navigate(getPaths.getLandingPage(), { replaced: true })
              }
            >
              Exit
            </Button>
          </RowContainer>
        </StyledContentContainer>
      </Container>
    </Drawer>
  );
};

const Container = styled.div`
  padding: 5rem 3rem;
  background: #f0a8a8;
`;

const StyledContentContainer = styled(ContentContainer)`
  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RoomTitle = styled(CanvassaText)`
  font-size: 2.5rem;
`;

const RoomLink = styled(CanvassaText)`
  font-size: 1.5rem;
`;

const RoomMembersCount = styled(CanvassaText)`
  font-size: 2rem;
`;

const ClipboardButtonContainer = styled.div`
  margin-left: 1rem;
`;
