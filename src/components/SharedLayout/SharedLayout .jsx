import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { FacebookButton } from 'components/FacebookLogin/FacebookLogin';
import { GoogleLoginButton } from 'components/GoogleLoginButton/GoogleLoginButton';
import { UserInfo } from 'components/UserInfo/UserInfo';

import { Container, StyledHeader } from './SharedLayout.styled';

export const SharedLayout = ({ canRender, onLogin }) => {
  const [user, setUser] = useState('');

  const getUser = value => {
    setUser(value);
  };

  return (
    <>
      <StyledHeader>
        {!canRender && <FacebookButton onLogin={onLogin} onUser={getUser} />}
        {!canRender && <GoogleLoginButton onLogin={onLogin} onUser={getUser} />}
        {canRender && user && (
          <UserInfo name={user.name} picture={user.picture} />
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
