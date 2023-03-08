import { AppBar } from './AppBar/AppBar';
import { ContainerDiv } from './Container/Container.sryled';
import { FilterForm } from './FilterForm/FilterForm';

export const App = () => {
  return (
    <ContainerDiv>
      <AppBar />
      <FilterForm />
    </ContainerDiv>
  );
};
