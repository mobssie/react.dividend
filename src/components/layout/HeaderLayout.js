import React from "react";
import styled from 'styled-components';
import LoginGoogleBtn from "../button/LoginGoogleBtn"
import LogoutGoogleBtn from "../button/LogoutGoogleBtn"
const HeaderLayout = () => {
  const StyledDiv = styled.div`
    background-color: #e2ffcc;
  `
  return(
    <StyledDiv>
      <LoginGoogleBtn/>
      <LogoutGoogleBtn/>
    </StyledDiv>
  )
}

export default HeaderLayout;