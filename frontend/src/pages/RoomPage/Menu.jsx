import { Drawer } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { TitleText } from "../../shared/components";

export const Menu = ({ isOpen, onClose, data }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <Container>
        <div>
          <RoomTitle>{data?.name}</RoomTitle>
        </div>
        <div>
          <RoomLink>{data?.link}</RoomLink>
        </div>
        <div>
          <RoomMembersCount>Members: {data?.members?.length}</RoomMembersCount>
        </div>
      </Container>
    </Drawer>
  );
};

const Container = styled.div`
  width: 20vw;
  padding: 5em;

  > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const RoomTitle = styled(TitleText)`
  font-size: 2.5rem;
`;

const RoomLink = styled(TitleText)`
  font-size: 1.5rem;
`;

const RoomMembersCount = styled(TitleText)`
  font-size: 2rem;
`;
