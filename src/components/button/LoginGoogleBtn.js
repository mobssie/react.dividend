// GoogleButton.js

import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = process.env.REACT_APP_FIREBASE_AUTH_CLIENT_ID;

export default function LoginGoogleBtn({ onSocial }){
  const onSuccess = async(response) => {
  
      const { googleId, profileObj : { email, name } } = response;
      console.log('response', response);
      console.log(response);
      // await onSocial({
      //     socialId : googleId,
      //     socialType : 'google',
      //     email,
      //     nickname : name
      // });
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