import React from 'react';
import { GoogleLogin } from 'react-google-login-lite';

const SocialLogin = () => {
  const onSuccess = (googleUser) => {
    console.log(googleUser);
  };

  const onFailure = (err) => {
    console.log(err);
  };
  return (
    <div>
      <GoogleLogin
        client_id="263437320900-eiu27s4tqa7o0luu0807r903dsldgqof.apps.googleusercontent.com"
        cookiepolicy="single_host_origin"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default SocialLogin;
