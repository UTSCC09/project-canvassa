import React, {useLayoutEffect, useRef, useState} from "react";
import styled from "styled-components";
import { BackButton, ToolMenu, MenuItem } from "../../shared/components";
import {Canvas, render, useFrame,useThree} from "@react-three/fiber";
import {Line, OrthographicCamera} from "@react-three/drei";
import * as THREE from 'three';
import { PATHS } from "../../shared/constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const CanvasPage = () => {
  const navigate = useNavigate();
  const goToLandingPage = () => {
    navigate(PATHS.LANDING_PAGE, { replaced: true });
  };

  const listOfLines = useRef([]);
  const [lstObjects, setLstObjects] = useState([]);
  const [lstLines, setLstLines] = useState([[0,0,0]]);
  const [prevMousePos, setPrevMousePose] = useState([0,0]);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(()=>{
    if(!mouseDown){
      setLstObjects(lstObjects.concat({points:lstLines, color:"black"}));
      setLstLines([[prevMousePos[0],prevMousePos[1],0]]);
    }
  });
  
  function Box(){
    return(<mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>);
  }
  

  const MouseMoveHandler = (e)=>{
    console.log("X:"+e.pageX+" Y:"+e.pageY +" " + window.innerHeight);
    
    const x =1.45*5*((e.pageX / window.innerWidth)*2 - 1);
    const y =0.77*5*(-1*((e.pageY /window.innerHeight)*2 - 1));
    if(mouseDown){
    setLstLines(lstLines.concat([x,y,0]))
    }
    setPrevMousePose(x,y)
  }
  

  function MouseDownHandler(e){
    setMouseDown(false);
  }
  
  function MouseUpHandler(e){
    setMouseDown(true);
  }

  function RenderObjectsComponent(){
    return (lstObjects.map((line)=>{
      return (<Line
      points={line.points}
      color={line.color}
      lineWidth={1}/>);
    }));
  }

  function RenderLinesComponent(){
    if(lstLines.length == 0){
      return (<Line
        points={[[0,0,0]]}
        color="black"
        lineWidth={1}/>);
    }else{
    return(<Line
      points={lstLines}
      color="black"
      lineWidth={1}/>);
    }
  }

  return (
    <Container>
      <BackButton onClick={goToLandingPage} />
      <Canvas camera={{position: [0, 0, 5] }}  onMouseMove={MouseMoveHandler}
  onPointerUp={MouseDownHandler}
  onPointerDown={MouseUpHandler} >
        <spotLight position={[10, 15, 10]} angle={0.3} />
      <RenderLinesComponent/>
      <RenderObjectsComponent/>
      </Canvas>
      <ToolMenu>
      </ToolMenu>
    </Container>
  );
};

const Container = styled.div`
height:100vh;
width:100vw;
`;
