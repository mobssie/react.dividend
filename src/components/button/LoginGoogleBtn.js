// GoogleButton.js

import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';

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
    const { googleId, profileObj : { email, name }, accessToken } = response;
    console.log('accessToken ??', accessToken)
    console.log('email ??', email, 'name', name)
    await setParmas({
        socialId : googleId,
        socialType : 'google',
        email,
        nickname : name,
        accessToken,
    });
    localStorage.setItem("accessToken", params);
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