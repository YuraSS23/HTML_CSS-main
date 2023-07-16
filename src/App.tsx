import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/StyledBtn";
import {Link} from "./components/Link";


function App() {
    return (
        <div className="App">
            <Box>
               {/* <StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>
                <StyledBtn color={"black"}>Hello</StyledBtn>
                <StyledBtn>Hello</StyledBtn>*/}
                <StyledBtn btnType={"primary"} active>Hello</StyledBtn>
                <StyledBtn btnType={"outlined"}>Hello</StyledBtn>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

