import styled from 'styled-components';

export const Input = styled.input`
  margin-bottom: 51px;
  width: 100%;
  height: 66px;
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
