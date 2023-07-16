import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/StyledBtn";
import {Link} from "./components/Link";
import {myTheme} from "./styles/Theme";


function App() {
    return (
        <div className="App">
            <Box>
               {/* <StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>
                <StyledBtn color={"black"}>Hello</StyledBtn>
                <StyledBtn>Hello</StyledBtn>*/}
                <StyledBtn color={myTheme.colors.primary} btnType={"primary"} active>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>
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
  
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`

