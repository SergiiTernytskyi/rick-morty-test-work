import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledHeader } from './SharedLayout .styled';

export const SharedLayout = () => {
  return (
    <>
      <StyledHeader />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
