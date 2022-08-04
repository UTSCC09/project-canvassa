import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useEffect } from "react";
import { ToolBar } from "./components/";
import { brushSettings } from "./components/states";
import { useRecoilState } from "recoil";
import { SOCKET_EVENTS } from "../../shared/constants";

export const CanvasPage = ({ roomData, openNavbar, connection }) => {
  const [lstObjects, setLstObjects] = useState([]);
  const [lstRemovedObjects, setLstRemovedObjects] = useState([]);
  const [lstLines, setLstLines] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [frame, setFrame] = useState(0);

  const [settings] = useRecoilState(brushSettings);

  useEffect(() => {
    if (!connection) return;
    connection.on(SOCKET_EVENTS.LINES, ({ lines }) => {
      lines?.length > 0 && setLstObjects(lines);
    });
  }, [connection]);

  useEffect(() => {
    if (!connection) return;

    if (!mouseDown) {
      if (connection) {
        connection.emit(SOCKET_EVENTS.LINES, {
          roomId: roomData.id,
          lineObject: {
            points: lstLines,
            color: settings.color,
            size: settings.size,
          },
        });
      }
      if (lstLines.length !== 0) {
        setLstObjects([
          ...lstObjects,
          { points: lstLines, color: settings.color, size: settings.size },
        ]);
      }
      setLstLines([]);
    }
  }, [mouseDown]);

  const MouseMoveHandler = (e) => {
    const x = 1.45 * 5 * ((e.pageX / window.innerWidth) * 2 - 1);
    const y = 0.77 * 5 * (-1 * ((e.pageY / window.innerHeight) * 2 - 1));
    if (mouseDown) {
      setLstLines([...lstLines, [x, y, 0]]);
    }
    setFrame(frame + 1);
  };

  const RenderObjectsComponent = () => {
    return lstObjects.map((line, i) =>
      line.points.length !== 0 ? (
        <Line
          key={i}
          points={line.points}
          color={line.color}
          lineWidth={line.size}
        />
      ) : null
    );
  };

  const RenderLinesComponent = () => {
    if (lstLines.length === 0) return null;
    return (
      <Line
        points={lstLines}
        color={settings.color}
        lineWidth={settings.size}
      />
    );
  };

  const UndoHandler = () => {
    if (lstObjects.length > 0) {
      // add to last drawn object to lstRemovedObjects and then remove it from lstObjects
      setLstRemovedObjects([
        ...lstRemovedObjects,
        lstObjects[lstObjects.length - 1],
      ]);
      setLstObjects(lstObjects.slice(0, -1));
    }
  };

  const RedoHandler = () => {
    if (lstRemovedObjects.length > 0) {
      // pop from lstRemovedObjects and insert it back into lstObjects.
      setLstObjects([
        ...lstObjects,
        lstRemovedObjects[lstRemovedObjects.length - 1],
      ]);
      setLstRemovedObjects(lstRemovedObjects.slice(0, -1));
    }
  };

  return (
    <Container>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onMouseMove={MouseMoveHandler}
        onPointerUp={() => setMouseDown(false)}
        onPointerDown={() => setMouseDown(true)}
      >
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <RenderLinesComponent />
        <RenderObjectsComponent />
      </Canvas>

      <ToolBar
        handlers={{ UndoHandler, RedoHandler }}
        openNavbar={openNavbar}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
