import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { FacebookButton } from 'components/FacebookLogin/FacebookLogin';

import {
  Container,
  StyledHeader,
  StyledUser,
  UserImage,
  UserInfo,
} from './SharedLayout.styled';
import { GoogleLoginButton } from 'components/GoogleLoginButton/GoogleLoginButton';

export const SharedLayout = ({ canRender, onLogin, onError }) => {
  const [facebookUser, setFacebookUser] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);

  const getFacebookUser = value => {
    setFacebookUser(value);
  };

  const getGoogleUser = value => {
    setGoogleUser(value);
  };

  return (
    <>
      <StyledHeader>
        {!canRender && (
          <FacebookButton
            onLogin={onLogin}
            onUser={getFacebookUser}
            onError={onError}
          />
        )}

        {!canRender && (
          <GoogleLoginButton
            onLogin={onLogin}
            onUser={getGoogleUser}
            onError={onError}
          />
        )}

        {canRender && facebookUser && (
          <StyledUser>
            <UserInfo>
              Hello, {facebookUser.name}
              <UserImage
                src={facebookUser.picture.data.url}
                alt={facebookUser.name}
              />
            </UserInfo>
          </StyledUser>
        )}

        {canRender && googleUser && (
          <StyledUser>
            <UserInfo>
              Hello, {googleUser.name}
              <UserImage src={googleUser.picture} alt={googleUser.name} />
            </UserInfo>
          </StyledUser>
        )}
      </StyledHeader>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
