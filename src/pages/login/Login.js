import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { firestore } from "../../firebase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { GoogleLogin, GoogleLogout } from "react-google-login";
const clientId = process.env.REACT_APP_FIREBASE_AUTH_CLIENT_ID;

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
  const [accessToken, setAccessToken] = useState('')
  const [showLoginButton, setLoginButton] = useState(true);
  const [showLogoutButton, setLogoutButton] = useState(false);
  const classes = useStyles();
  const loginHandler = (res) => {
    console.log("res", res.profileObj);
    console.log("this is my")
    setLoginButton(false);
    setLogoutButton(true);
  };
  const failureHandler = (res) => {
    console.log("login failed", res);
  };
  const logoutHandler = (res) => {
    alert("logout sucessfully");
    setLoginButton(true);
    setLogoutButton(false);
  };
  // const auth = firebase.auth();
  // const responseFacebook = (response) => {
  //   console.log(response);
  //   history.push("/");
  // };

  // const providerGoogle = new firebase.auth.GoogleAuthProvider();
  // const [params, setParmas] = useState({
  //   socialId : '',
  //   socialType : '',
  //   email: '',
  //   nickname : '',
  //   accessToken: '',
  // });
  // const onSuccess = async(response) => {
  //   const { googleId, profileObj : { email, name }, accessToken } = await response;
  //   localStorage.setItem('accessToken', JSON.stringify(accessToken));
  //   localStorage.setItem('user', JSON.stringify({
  //     googleId,
  //     name,
  //     email,
  //   }));
  // }

  const onFailure = (error) => {
    console.log(error);
  }
  useEffect(() => {

  }, [accessToken])
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h6" component="h4">
          Sign In
        </Typography>
        <Box mt={8}>
        {showLoginButton && (
          <GoogleLogin
            buttonText="Log in with Google"
            clientId={clientId}
            variant="outlined"
            style={{
              color: "red",
              textTransform: "none",
              paddingRight: "60px",
              marginTop: "50px",
              background: "red",
            }}
            responseType={"id_token"}
            onSuccess={loginHandler}
            onFailure={failureHandler}
            cookiePolicy={'single_host_origin'}
          />
        )}
        {showLogoutButton && (
        <GoogleLogout
          clientId={clientId}
          render={(renderProps) => (
            <button
              className="btn button btn-outline"
              onClick={renderProps.onClick}
              // disabled={renderProps.disabled}
            >logout 
            </button>
          )}
          onLogoutSuccess={logoutHandler}
        ></GoogleLogout>
      )}
          </Box>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default Login;