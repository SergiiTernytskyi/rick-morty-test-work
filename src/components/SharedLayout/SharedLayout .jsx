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

export const SharedLayout = ({ canRender, onLogin }) => {
  const [facebookUser, setFacebookUser] = useState(null);

  const getFacebookUser = value => {
    setFacebookUser(value);
  };

  return (
    <>
      <StyledHeader>
        {!canRender && (
          <FacebookButton onLogin={onLogin} onUser={getFacebookUser} />
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
      </StyledHeader>
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
