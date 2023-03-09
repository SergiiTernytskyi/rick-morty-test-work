import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  position: absolute;
  left: 54px;
  top: 0;
  padding: 21px 0;
  margin-bottom: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;
  color: #000000;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  text-transform: uppercase;
  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 0.6;
  }
`;
