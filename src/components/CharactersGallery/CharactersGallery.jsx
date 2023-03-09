import {
  CharaclersList,
  CharacterImage,
  CharacterImageThumb,
  CharacterItem,
  CharacterMeta,
  CharacterName,
  CharacterSpecies,
  StyledLink,
} from './CharactersGallery.styled';

export const CharactersGallery = ({ characters, location }) => {
  return (
    <CharaclersList>
      {characters.map(({ id, name, image, species }) => {
        return (
          <CharacterItem key={id}>
            <StyledLink to={`/characters/${id}`} state={{ from: location }}>
              <CharacterImageThumb>
                <CharacterImage src={image} alt={name} />
              </CharacterImageThumb>

              <CharacterMeta>
                <CharacterName>{name}</CharacterName>
                <CharacterSpecies>{species}</CharacterSpecies>
              </CharacterMeta>
            </StyledLink>
          </CharacterItem>
        );
      })}
    </CharaclersList>
  );
};
