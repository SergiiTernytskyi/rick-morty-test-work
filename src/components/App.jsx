import { useState, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout ';

const HomePage = lazy(() => import('pages/HomePage'));
const CharacterPage = lazy(() => import('pages/CharacterPage'));

export const App = () => {
  const [canRender, setCanRender] = useState(false);

  const onLogin = () => {
    setCanRender(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<SharedLayout canRender={canRender} onLogin={onLogin} />}
      >
        <Route index element={<HomePage canRender={canRender} />} />
        <Route path="characters/:characterId" element={<CharacterPage />} />
      </Route>
    </Routes>
  );
};
