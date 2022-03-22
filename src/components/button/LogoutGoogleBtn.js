// GoogleButton.js

import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_FIREBASE_AUTH_CLIENT_ID;
console.log('clientId', clientId)
export default function LogoutGoogleBtn({ onSocial }){
  console.log('onSocial', onSocial);
  const onSuccess = async(response) => {
  
      const { googleId, profileObj : { email, name } } = response;
      console.log('googleId ??', onSocial, 'onSocial', onSocial)
      await onSocial({
          socialId : googleId,
          socialType : 'google',
          email,
          nickname : name
      });
  }

  const onFailure = (error) => {
      console.log(error);
  }

  return(
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"/>
    </div>
  )
}