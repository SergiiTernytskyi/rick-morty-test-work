import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout ';

const HomePage = lazy(() => import('pages/HomePage'));
const CharacterPage = lazy(() => import('pages/CharacterPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="characters/:characterId" element={<CharacterPage />} />
      </Route>
    </Routes>
  );
};
