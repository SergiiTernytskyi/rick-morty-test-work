import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const PaginationButton = styled.button`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrentPage = styled.p`
  padding: 8px 24px;

  font-weight: 400;
  font-size: 32px;
  line-height: 1.19;
  text-align: center;

  border: solid 1px #081f32;
  border-radius: 16px;

  color: #081f32;
`;
