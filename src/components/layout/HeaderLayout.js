import React from "react";
import LoginGoogleBtn from "../button/LoginGoogleBtn"
import LogoutGoogleBtn from "../button/LogoutGoogleBtn"
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Link, RouteComponentProps } from 'react-router-dom';



const StyledDiv = styled.div`
  height: 40px;
`
const useStyles = makeStyles({
  root: {
    float: 'right',
    margin: '10px'
  },
  label: {}, // a nested style rule
});
const HeaderLayout = () => {
  const classes = useStyles();

  return(
    <StyledDiv>=
      <button className={classes.root}>
        <Link to="/login">로그인</Link>
      </button>
      {/* <LoginGoogleBtn/>
      <LogoutGoogleBtn/> */}
    </StyledDiv>
  )
}

export default HeaderLayout;