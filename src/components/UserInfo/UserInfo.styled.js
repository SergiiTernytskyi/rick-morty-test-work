import styled from 'styled-components';

export const StyledUser = styled.div`
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 1440px) {
    padding: 0 15px;
    max-width: 1050px;
  }
`;

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  color: #081f32;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    gap: 10px;
  }
`;

export const UserImage = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;
