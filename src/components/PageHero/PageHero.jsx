import { Link } from 'react-router-dom';

import image from '../../images/rickMorty.png';

import { Image, StyledDiv } from './PageHero.styled';

export const PageHero = () => {
  return (
    <StyledDiv>
      <Link to={'/'}>
        <Image src={image} alt="Rick and Morty" />
      </Link>{' '}
    </StyledDiv>
  );
};
