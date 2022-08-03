import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Canvas, render, useFrame, useThree } from "@react-three/fiber";
import { Line, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import { getPaths } from "../../shared/constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { get_room_connection } from "./networking/networkmanger";
import { ToolBar } from "./components/toolbar/";
import { brushSettings } from "./components/toolbar/states";
import { useRecoilState } from "recoil";
import { Menu } from "../RoomPage/Menu";

export const CanvasPage = ({
  roomData,
  openNavbar,
  closeNavbar,
  isNavbarOpen,
}) => {
  const navigate = useNavigate();
  const goToLandingPage = () => {
    setCanvasVisible(false);
    navigate(getPaths.getLandingPage(), { replaced: true });
  };

  const listOfLines = useRef([]);
  const [lstObjects, setLstObjects] = useState([]);
  const [lstRemovedObjects, setLstRemovedObjects] = useState([]);
  const [lstLines, setLstLines] = useState([[0, 0, 0]]);
  const [prevMousePos, setPrevMousePose] = useState([0, 0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [frame, setFrame] = useState(0);
  const [conn, setConnnection] = useState(null);
  const [canvasVisible, setCanvasVisible] = useState(true);
  const [dbLines, setDbLines] = useState([]);

  const [settings, setSettings] = useRecoilState(brushSettings);

  //Initiate Networking
  useEffect(() => {
    setConnnection(get_room_connection(roomData.serverLink));
  }, []);

  //Adding All On listeners
  useEffect(() => {
    if (conn) {
      console.log("Added On Listeners");
      conn.socket.on("lines", (line) => {
        console.log("Received Line");
        setLstObjects([...lstObjects, line]);
      });
    } else {
      console.log("Failed to add On Listeners");
    }
  }, [conn]);

  //Logging Changes to Lst object
  useEffect(() => {
    if (conn) {
      conn.socket.on("lines", (line) => {
        console.log("Received Line");
        setLstObjects([...lstObjects, line]);
      });
    }
  }, [lstObjects]);

  useEffect(() => {
    if (!mouseDown) {
      //Emtpy Removed Objects Cache
      setLstRemovedObjects([]);
      if (conn) {
        conn.socket.emit("lines", {
          points: lstLines,
          color: settings.color,
          size: settings.size,
        });
      } else {
        console.log("Socket Hasn't Establish Connection!");
      }
      if (lstLines.length != 0) {
        setLstObjects([
          ...lstObjects,
          { points: lstLines, color: settings.color, size: settings.size },
        ]);
      }
      setLstLines([]);
    }
  }, [mouseDown]);

  // useEffect(() => {
  //   setLstLines([...dbLines]);
  // }, [dbLines]);

  const MouseMoveHandler = (e) => {
    const x = 1.45 * 5 * ((e.pageX / window.innerWidth) * 2 - 1);
    const y = 0.77 * 5 * (-1 * ((e.pageY / window.innerHeight) * 2 - 1));
    if (mouseDown) {
      setLstLines([...lstLines, [x, y, 0]]);
    }
    setPrevMousePose(x, y);
    setFrame(frame + 1);
  };

  function MouseDownHandler(e) {
    setMouseDown(false);
  }

  function MouseUpHandler(e) {
    setMouseDown(true);
  }

  function RenderObjectsComponent() {
    return lstObjects.map((line, i) => {
      return (
        <Line
          key={i}
          points={line.points}
          color={line.color}
          lineWidth={line.size}
        />
      );
    });
  }

  function RenderLinesComponent() {
    if (lstLines.length == 0) {
      return null;
    } else {
      return (
        <Line
          points={lstLines}
          color={settings.color}
          lineWidth={settings.size}
        />
      );
    }
  }

  function UndoHandler() {
    if (lstObjects.length > 0) {
      //add to last drawn object to lstRemovedObjects and then remove it from lstObjects
      setLstRemovedObjects([...lstRemovedObjects, [...lstObjects].pop()]);
      setLstObjects([...lstObjects].slice(0, -1));
    }
    console.log("Undo");
  }

  function RedoHandler() {
    if (lstRemovedObjects.length > 0) {
      //pop from lstRemovedObjects and insert it back into lstObjects.
      setLstObjects([...lstObjects, [...lstRemovedObjects].pop()]);
      setLstRemovedObjects([...lstRemovedObjects].slice(0, -1));
    }
    console.log("Redo");
  }

  const handlers = { UndoHandler, RedoHandler };

  return (
    <Container>
      {canvasVisible ? (
        <Canvas
          camera={{ position: [0, 0, 5] }}
          onMouseMove={MouseMoveHandler}
          onPointerUp={MouseDownHandler}
          onPointerDown={MouseUpHandler}
        >
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <RenderLinesComponent />
          <RenderObjectsComponent />
        </Canvas>
      ) : null}
      <ToolBar handlers={handlers} openNavbar={openNavbar} />
      <Menu isOpen={isNavbarOpen} onClose={closeNavbar} data={roomData} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
