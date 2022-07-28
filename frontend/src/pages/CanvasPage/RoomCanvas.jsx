import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BackButton, ToolMenu, MenuItem } from "../../shared/components";
import { Canvas, render, useFrame, useThree } from "@react-three/fiber";
import { Line, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";

export const RoomCanvas = ({ geometries }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const [lineGeometry, setLineGeometry] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const points = [
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(0, -10, 0),
      new THREE.Vector3(10, 0, 0),
      new THREE.Vector3(0, 0, 0),
    ];
    setLineGeometry(new THREE.BufferGeometry().setFromPoints(points));
  }, []);

  // useEffect(() => {
  //   document.addEventListener("click", onMouseClick);
  //   return () => {
  //     document.removeEventListener("click", onMouseClick);
  //   };
  // }, [lastMouseCoords, geometries]);

  useEffect(() => console.log(geometries), [geometries]);

  if (!lineGeometry) return null;

  return (
    <>
      <spotLight position={[0, 0, 10]} angle={0.3} />
      <group position={[0, 0, 0]}>
        <line ref={ref} geometry={lineGeometry}>
          <lineBasicMaterial
            attach="material"
            color={"#9c88ff"}
            linewidth={10}
            linecap={"round"}
            linejoin={"round"}
          />
        </line>
      </group>
      {geometries.map((geom, i) => (
        <group position={[0, 0, 0]} key={i}>
          <line geometry={geom}>
            <lineBasicMaterial
              attach="material"
              color={"#9c88ff"}
              linewidth={10}
              linecap={"round"}
              linejoin={"round"}
            />
          </line>
        </group>
      ))}
    </>
  );
};
