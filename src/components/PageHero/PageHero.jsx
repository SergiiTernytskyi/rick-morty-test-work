import { Link } from 'react-router-dom';
import image from '../../images/rickMorty.png';
import { Image, StyledDiv } from './PageHero.styled';

export const PageHero = () => {
  return (
    <Link to={'/'}>
      <StyledDiv>
        <Image src={image} alt="Rick and Morty" />
      </StyledDiv>
    </Link>
  );
};
