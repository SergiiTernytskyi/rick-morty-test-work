import { Input } from './FilterForm.styled';

export const FilterForm = () => {
  return (
    <>
      <Input
        type="text"
        name="filter"
        required="required"
        //   onChange={inputHandler}
        //   value={filter}
        placeholder="Filter by name..."
      />
    </>
  );
};
