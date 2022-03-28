// GoogleButton.js

import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_FIREBASE_AUTH_CLIENT_ID;
export default function LogoutGoogleBtn({ onSocial }){
  const onSuccess = async(response) => {
      const { googleId, profileObj : { email, name }, accessToken } = response;
      console.log('accessToken ??', accessToken)
      console.log('email ??', email, 'name', name)
      console.log('email ??', email, 'name', name)
      await onSocial({
          socialId : googleId,
          socialType : 'google',
          email,
          nickname : name,
          accessToken,
      });
      console.log('onSocial', onSocial);
      localStorage.setItem("accessToken", response.data.token.access);
      localStorage.setItem("refreshToken", response.data.token.refresh);
  }

  const onFailure = (error) => {
      console.log(error);
  }

  return(
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onSuccess={onSuccess}
        onFailure={onFailure}
        />
    </div>
  )
}