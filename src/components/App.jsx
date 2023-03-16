import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout ';

const HomePage = lazy(() => import('pages/HomePage'));
const CharacterPage = lazy(() => import('pages/CharacterPage'));

export const App = () => {
  const [canRender, setCanRender] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = () => {
    setCanRender(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
            canRender={canRender}
            onLogin={onLogin}
            onError={() => setError()}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              canRender={canRender}
              error={error}
              onError={() => setError()}
            />
          }
        />
        <Route path="characters/:characterId" element={<CharacterPage />} />
      </Route>
    </Routes>
  );
};
