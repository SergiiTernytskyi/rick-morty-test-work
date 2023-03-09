import {
  Container,
  StyledImage,
  StyledList,
  StyledListItem,
  StyledName,
  StyledParametrItem,
  StyledParametrTitle,
  StyledTitle,
} from './CharacterCard.styled';

export const CharacterCard = ({
  image,
  name,
  gender,
  status,
  species,
  origin,
  type,
}) => {
  return (
    <Container>
      <StyledImage src={image} alt={name} />
      <StyledName>{name}</StyledName>

      <StyledTitle>Informations</StyledTitle>

      <StyledList>
        <StyledListItem>
          <StyledParametrTitle>Gender</StyledParametrTitle>
          <StyledParametrItem>{gender}</StyledParametrItem>
        </StyledListItem>

        <StyledListItem>
          <StyledParametrTitle>Status</StyledParametrTitle>
          <StyledParametrItem>{status}</StyledParametrItem>
        </StyledListItem>

        <StyledListItem>
          <StyledParametrTitle>Specie</StyledParametrTitle>
          <StyledParametrItem>{species}</StyledParametrItem>
        </StyledListItem>

        <StyledListItem>
          <StyledParametrTitle>Origin</StyledParametrTitle>
          <StyledParametrItem>{origin.name}</StyledParametrItem>
        </StyledListItem>

        <StyledListItem>
          <StyledParametrTitle>Type</StyledParametrTitle>
          <StyledParametrItem>{type ? type : 'Unknown'}</StyledParametrItem>
        </StyledListItem>
      </StyledList>
    </Container>
  );
};
