import image from '../../images/rickMorty.png';
import { Header, Image } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Image src={image} alt="Rick and Morty" />
    </Header>
  );
};
