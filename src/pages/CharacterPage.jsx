import { BackLink } from 'components/BackLink/BackLink';
import { CharacterCard } from 'components/CharacterCard/CharacterCard';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getCharacterById } from 'services/charactersApi';

const CharacterPage = () => {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);
  const { characterId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setError(null);

    const getCharacter = async id => {
      try {
        const data = await getCharacterById(id);

        setCharacter(data);
      } catch (error) {
        setError('Something went wrong');
      }
    };

    getCharacter(characterId);
  }, [characterId]);

  if (!character) {
    return;
  }

  const { name, gender, status, species, origin, image, type } = character;

  return (
    <main>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <BackLink to={backLinkHref}>Go back</BackLink>
      {!error && character !== {} && (
        <CharacterCard
          image={image}
          name={name}
          gender={gender}
          status={status}
          species={species}
          origin={origin}
          type={type}
        />
      )}
    </main>
  );
};

export default CharacterPage;
