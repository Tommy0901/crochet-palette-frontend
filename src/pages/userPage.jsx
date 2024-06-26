import { useEffect, useState } from "react";
import { StyledMenuContainer, StyledLeftContainer, StyledRightContainer, BrandName, StyledBrandContainer } from "./demoPage";
import PrimaryColors from "../components/primaryColors";
import { Menu } from "../components/menuComponent"
import styled from "styled-components";
import "../styles/craftPalette.scss";

const StyledMenuBrandContainer = styled.div`
  animation: appear 0.5s ease-out;
  position: absolute;
  bottom: 1rem;
  width: 80%;
  color: #614d3b;
  h1 {
    font-size: calc(0.8rem + 1vw);
  }
  h2 {
    font-size: calc(0.5rem + 1vw);
  }
  p {
    font-size: calc(0.1rem + 1vw);
  }
`

export default function UserPage(){
  const [screenW, setScreenW] = useState(window.innerWidth)
  const handleResize = () =>{
    setScreenW(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize", handleResize)
  },[])

  return(
    <>
    <StyledMenuContainer>
         <StyledLeftContainer>
          <PrimaryColors first="#24201e" second="#614d3b" third="#9f9089" fourth="#cac8c6" fifth="#ece7e0" anime="userPageVersion"/>
          <StyledBrandContainer>
            {screenW>750? <BrandName/>:""}
          </StyledBrandContainer>
         </StyledLeftContainer>
         <StyledRightContainer width="85%" maxW="400px">
         
      <div className="profile-container d-flex">
        <div className="img-container d-flex">
          <div className="img"></div>  
          <h2>-TEIENBIYORI-</h2>
        </div>
        <button className="edit"><i className="fa-regular fa-pen-to-square"></i></button>
        <div className="menu-container">
          <Menu/>
        </div>
        <StyledMenuBrandContainer>
          {screenW<750? <BrandName/>:""}
        </StyledMenuBrandContainer>
      </div>
         </StyledRightContainer>
    </StyledMenuContainer>
    </>
  )
}