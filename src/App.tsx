import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/StyledBtn";
import {Link} from "./components/Link";
import {Menu} from "./components/Menu";

function App() {
    return (
        <div className="App">
                <Menu>
                    <ul>
                        <li><a href="">Menu Item 1</a></li>
                            <li><a href="">Menu Item 2</a></li>
                                <li><a href="">Menu Item 3</a></li>
                    </ul>
                </Menu>

            <Box>
                <StyledBtn as={Link} href={'#'}>Link Component</StyledBtn>
                <StyledBtn as="a" href={'#'}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
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

