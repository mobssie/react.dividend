// GoogleButton.js

import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import Button from '@mui/material/Button';

const clientId = process.env.REACT_APP_FIREBASE_AUTH_CLIENT_ID;

export default function LoginGoogleBtn(){
  const [params, setParmas] = useState({
    socialId : '',
    socialType : '',
    email: '',
    nickname : '',
    accessToken: '',
  });
  const onSuccess = async(response) => {
    const { googleId, profileObj : { email, name }, accessToken } = await response;
    window.localStorage.setItem("accessToken", JSON.stringify(accessToken));
    window.localStorage.setItem("user", JSON.stringify({
      googleId,
      name,
      email,
    }));
  }

  const onFailure = (error) => {
      console.log(error);
  }

  return(
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        />
    </div>
  )
}