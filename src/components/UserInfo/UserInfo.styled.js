import styled from 'styled-components';

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
