import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "./Menu";
import { io } from "socket.io-client";
import { useAuthApi, useRoomsApi } from "../../shared/api";
import { SOCKET_API, SOCKET_EVENTS } from "../../shared/constants";
import { CanvasPage } from "../CanvasPage/CanvasPage";
import { RecoilRoot } from "recoil";

export const RoomPage = () => {
  const { id: roomId } = useParams();
  const { getUsername } = useAuthApi();
  const { getRoom } = useRoomsApi();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    getRoom(roomId).then((data) => {
      if (!data || data.err) return;
      const newRoomData = { ...data, id: data._id };
      newRoomData._id = undefined;
      setRoomData(newRoomData);
    });
  }, []);

  useEffect(() => {
    if (socket !== null || !roomData) return;

    // establish socket connection
    const newSocket = io(SOCKET_API.ROOT, {
      transports: ["websocket"],
      auth: { token: getUsername() },
    });
    newSocket.emit(SOCKET_EVENTS.JOIN_ROOM, {
      roomId: roomData.id,
    });
    setSocket(newSocket);
  }, [roomData]);

  useEffect(() => {
    if (!socket) return;

    socket.on(SOCKET_EVENTS.CONNECT_ERROR, (message) => {
      console.log(`ERROR: 500`);
      console.log(message);
    });

    socket.on(SOCKET_EVENTS.ERROR, ({ code, msgs }) => {
      console.log(`ERROR: ${code}`);
      console.log(msgs);
    });

    socket.on(SOCKET_EVENTS.UPDATE_ROOM_MEMBERS, ({ members }) =>
      setRoomData({ ...roomData, members })
    );
  }, [socket]);

  if (!roomData) return null;

  return (
    <Container>
      <RecoilRoot>
        <CanvasPage
          roomData={roomData}
          openNavbar={() => setIsNavbarOpen(true)}
          connection={socket}
        />
      </RecoilRoot>
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
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
