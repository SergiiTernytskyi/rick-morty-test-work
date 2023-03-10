import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

export const StyledInputWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
  width: 100%;
  height: 56px;

  @media (min-width: 1440px) {
    margin-bottom: 54px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 16px 16px 16px 48px;
  font-size: 16px;
  color: #000000;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  transition: all 250ms ease-out;

  :valid,
  :focus {
    border: 1px solid #000000;
  }
`;

export const SearchIcon = styled(BiSearchAlt2)`
  position: absolute;
  left: 16px;
  top: 16px;
  color: rgba(0, 0, 0, 0.54);
`;
