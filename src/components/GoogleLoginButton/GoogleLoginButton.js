import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

export const GoogleLoginButton = ({ onLogin, onUser }) => {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        if (credentialResponse.credential) {
          onLogin();
        }

        function handleCredentialResponse(response) {
          const { name, picture } = jwt_decode(response.credential);
          onUser({ name, picture });
        }

        handleCredentialResponse(credentialResponse);
      }}
      type="standard"
      text="signin_with"
      size="medium"
    />
  );
};
