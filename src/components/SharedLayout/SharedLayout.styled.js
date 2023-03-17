import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 1440px) {
    padding: 0 15px;
    max-width: 1050px;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin: 0 auto;

  width: 100%;
  height: 66px;

  @media (min-width: 1440px) {
    padding: 0 15px;
    max-width: 1050px;
  }
`;
