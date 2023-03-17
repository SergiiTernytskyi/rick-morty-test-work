import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharaclersList = styled.ul`
  margin-bottom: 88px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 24px;
  }
`;

export const CharacterItem = styled.li`
  margin-bottom: 32px;
  flex-basis: 100%;
  min-height: 244px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    flex-basis: calc((100% - (3 * 20px)) / 4);
    margin-bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 0.6;
  }
`;

export const CharacterImageThumb = styled.div`
  max-width: 100%;
  height: 232px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 334px;
  }

  @media (min-width: 1440px) {
    height: 168px;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 -36px;
`;

export const CharacterMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 1px;
  padding: 12px 16px;
`;

export const CharacterName = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const CharacterSpecies = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;
