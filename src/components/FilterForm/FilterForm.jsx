import { Input, SearchIcon, StyledInputWrapper } from './FilterForm.styled';

export const FilterForm = ({ onChange }) => {
  return (
    <StyledInputWrapper>
      <Input
        type="text"
        name="filter"
        required="required"
        onChange={onChange}
        placeholder="Filter by name..."
      />
      <SearchIcon size={24} />
    </StyledInputWrapper>
  );
};
