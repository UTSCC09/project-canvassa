import styled from "styled-components";

export const CircleContainer = styled.div`
  height: 4em;
  width: 4em;
  border-radius: 5em;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-width: 1em;
  border-style: solid;
  padding: 0em;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-color: rgba(0, 0, 0, 0);
  caret-color: transparent;
  &:hover {
    box-shadow: 0 0 0.5em 0.1em grey;
  }
`;
