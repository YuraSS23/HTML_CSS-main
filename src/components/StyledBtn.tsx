import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "outlined" | "primary"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;
  

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
  border: 2px solid ${props => props.color || "#fb3f78"};
  color: ${props => props.color || "#fb3f78"};
  background-color: transparent;
    
    &:hover {
      border-color: darkorchid;
      background-color: transparent;
      color: indigo;
    }
    
`}
  
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;

    &:hover {
      background-color: rgba(133, 114, 243, 0.53);
    }
  `}
  
   ${props => props.active && css<StyledBtnPropsType>`
     box-shadow: 5px 5px 5px 5px rgba(190, 80, 142, 0.65);
   `
}
  
  
`
