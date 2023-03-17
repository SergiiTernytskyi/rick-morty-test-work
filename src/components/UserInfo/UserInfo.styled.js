import styled from 'styled-components';

export const StyledUser = styled.div`
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 0 0 auto;
  }
`;

export const UserMeta = styled.p`
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
    width: 50px;
    height: 50px;
  }
`;
