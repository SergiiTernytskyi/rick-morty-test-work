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
  justify-content: center;
  margin: 0 auto;

  width: 100%;
  height: 66px;

  @media (min-width: 1440px) {
    justify-content: flex-start;
    padding: 0 15px;
    max-width: 1050px;
  }
`;

export const StyledUser = styled.div`
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 0 0 auto;
  }
`;

export const UserInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.19;
  color: #081f32;
`;

export const UserImage = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    border-radius: 50%;
  }
`;
