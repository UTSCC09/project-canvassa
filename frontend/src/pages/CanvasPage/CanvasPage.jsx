import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BackButton, ToolMenu, MenuItem } from "../../shared/components";
import { Canvas, render, useFrame, useThree } from "@react-three/fiber";
import { Line, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import { PATHS } from "../../shared/constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { get_room_connection } from "./networking/networkmanger";

export const CanvasPage = () => {
  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate(PATHS.LANDING_PAGE, { replaced: true });
  };

  const listOfLines = useRef([]);
  const [lstObjects, setLstObjects] = useState([]);
  const [lstLines, setLstLines] = useState([[0, 0, 0]]);
  const [prevMousePos, setPrevMousePose] = useState([0, 0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [frame, setFrame] = useState(0);
  const [conn, setConnnection] = useState(null);
  //Initiate Networking
  useEffect(() => {
    setConnnection(get_room_connection());
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
    console.log(lstObjects);
    if (conn) {
      conn.socket.on("lines", (line) => {
        console.log("Received Line");
        setLstObjects([...lstObjects, line]);
      });
    }
  }, [lstObjects]);

  useEffect(() => {
    if (!mouseDown) {
      if (conn) {
        conn.socket.emit("lines", { points: lstLines, color: "black" });
      } else {
        console.log("Socket Hasn't Establish Connection!");
      }
      setLstObjects([...lstObjects, { points: lstLines, color: "black" }]);
      setLstLines([]);
    }
  }, [mouseDown]);

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
        <Line key={i} points={line.points} color={line.color} lineWidth={1} />
      );
    });
  }

  function RenderLinesComponent() {
    if (lstLines.length == 0) {
      return null;
    } else {
      return <Line points={lstLines} color='black' lineWidth={1} />;
    }
  }

  return (
    <Container>
      <BackButton onClick={goToLandingPage} />
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onMouseMove={MouseMoveHandler}
        onPointerUp={MouseDownHandler}
        onPointerDown={MouseUpHandler}>
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <RenderLinesComponent />
        <RenderObjectsComponent />
      </Canvas>
      <ToolMenu></ToolMenu>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
