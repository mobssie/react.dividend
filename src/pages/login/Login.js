import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { firestore } from "../../firebase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Made with <span style={{ color: "red" }}> ❤ </span> from Mobssie .
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  google: {
    margin: theme.spacing(3, 0, 2),
    height: "50px",
    background: "#2196f3",
    borderRadius: 3,
    border: 0,
    fontSize: "16px",
    fontWeight: "550",
    width: "100%",
    color: "white",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  facebook: {
    margin: theme.spacing(3, 0, 2),
    height: "50px",
    background: "#4267B2",
    borderRadius: 3,
    border: 0,
    fontSize: "16px",
    fontWeight: "550",
    fontFamily: "'Noto Sans', sans-serif",
    width: "100%",
    color: "white",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
}));

const Login = () => {
  const classes = useStyles();
  // const auth = firebase.auth();
  // const responseFacebook = (response) => {
  //   console.log(response);
  //   history.push("/");
  // };

  // const providerGoogle = new firebase.auth.GoogleAuthProvider();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h6" component="h4">
          Sign In
        </Typography>
        <Button
          // onClick={singInWithGoogle}
          variant="outlined"
          style={{
            textTransform: "none",
            paddingRight: "60px",
            marginTop: "50px",
            background: "white"
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRF__vDRer9N3lzmW-FJTnaiCi1Vd7TvcHrdcjzU28RHD2kcpRVdZIQhLvZaksbBPpak&usqp=CAU"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "60px"
            }}
            alt="google"
          />
          Log in with Google
        </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default Login;