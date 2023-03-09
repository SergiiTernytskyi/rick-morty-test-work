import { Input } from './FilterForm.styled';

export const FilterForm = ({ onChange }) => {
  return (
    <>
      <Input
        type="text"
        name="filter"
        required="required"
        onChange={onChange}
        placeholder="Filter by name..."
      />
    </>
  );
};
