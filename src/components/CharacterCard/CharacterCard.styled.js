import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 380px) {
    width: 390px;
  }
`;

export const StyledImage = styled.img`
  margin: 58px auto 34px;
  width: 150px;
  height: 150px;

  border: 5px solid #f2f2f7;
  border-radius: 50%;

  @media (min-width: 380px) {
    margin: 10px auto 16px;
    width: 300px;
    height: 300px;
  }
`;

export const StyledName = styled.h2`
  margin-bottom: 34px;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.19;
  text-align: center;
  color: #081f32;

  @media (min-width: 380px) {
    margin-bottom: 48px;
    font-size: 48px;
    line-height: 1.17;
  }
`;

export const StyledTitle = styled.h3`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.15px;
  text-align: start;
  color: #8e8e93;

  @media (min-width: 380px) {
    margin-bottom: 48px;
    text-align: center;
  }
`;

export const StyledList = styled.ul`
  margin-bottom: 86px;
  padding: 9px 16px;

  @media (min-width: 380px) {
    margin-bottom: 142px;
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  padding: 9px 0;
`;

export const StyledParametrTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #081f32;
`;

export const StyledParametrItem = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6e798c;
`;
