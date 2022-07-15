import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../shared/components";
import { Menu } from "./Menu";

export const RoomPage = () => {
  const { id: roomId } = useParams();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Container>
      {!isNavbarOpen && (
        <Button onClick={() => setIsNavbarOpen(true)}>Open Navbar</Button>
      )}
      <Menu
        isOpen={isNavbarOpen}
        onClose={() => setIsNavbarOpen(false)}
        data={{
          id: roomId,
          name: "My Room",
          members: ["1"],
          link: "http://localhost:5000/join",
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background: #dedede;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
