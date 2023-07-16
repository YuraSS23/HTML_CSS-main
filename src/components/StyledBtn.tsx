import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #00deff;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #2b00ff;
  }

  &:last-child {
    background-color: #ffa265;
  }
`
export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #fff800;
  color: black;
  
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`