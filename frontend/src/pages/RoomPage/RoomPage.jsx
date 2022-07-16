import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../shared/components";
import { Menu } from "./Menu";
import io from "socket.io-client";

export const RoomPage = () => {
  const { id: roomId } = useParams();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  const [roomData, setRoomData] = useState({
    id: roomId,
    members: [],
    name: "My Room",
    link: "http://localhost:5000/join",
  });

  useEffect(() => {
    if (socket || !roomData) return;

    // establish socket connection
    const newSocket = io("http://localhost:5000", {
      transports: ["websocket"],
      auth: { token: "test" },
    });
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [roomData, socket]);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect_error", (message) => console.log(message));

    socket.on("canvassa-error", ({ code, msgs }) => {
      console.log(`ERROR: ${code}`);
      console.log(msgs);
    });

    socket.on("update-room-members", ({ members }) =>
      setRoomData({ ...roomData, members })
    );
  });

  return (
    <Container>
      {!isNavbarOpen && (
        <Button onClick={() => setIsNavbarOpen(true)}>Open Navbar</Button>
      )}
      <Menu
        isOpen={isNavbarOpen}
        onClose={() => setIsNavbarOpen(false)}
        data={roomData}
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
