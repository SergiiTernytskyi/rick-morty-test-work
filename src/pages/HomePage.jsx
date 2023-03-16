import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { PageHero } from 'components/PageHero/PageHero';
import { CharactersGallery } from 'components/CharactersGallery/CharactersGallery';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { FilterForm } from 'components/FilterForm/FilterForm';

import { getAllCharacters, getCharacterByName } from 'services/charactersApi';

const HomePage = ({ canRender, error, onError }) => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams?.get('name') ?? '';

  const sortCharacter = character => {
    return character.results
      .map(({ id, name, image, species }) => {
        return { id, name, image, species };
      })
      .sort((firstCharacter, secondCharacter) =>
        firstCharacter.name.localeCompare(secondCharacter.name)
      );
  };

  useEffect(() => {
    onError(null);

    const getCharacters = async () => {
      try {
        const data = await getAllCharacters();

        setCharacters(sortCharacter(data));
      } catch (error) {
        if (error.response.status === 404) {
          return onError('Not found');
        }
        onError('Something went wrong');
      }
    };

    const getFilteredCharacters = async () => {
      try {
        const data = await getCharacterByName(characterName);

        if (data === []) {
          onError('We did not find anything');
        }

        setCharacters(sortCharacter(data));
      } catch (error) {
        if (error.response.status === 404) {
          return onError('Not found');
        }
        onError('Something went wrong');
      }
    };

    if (characterName) {
      getFilteredCharacters(characterName);
      return;
    }
    getCharacters();
  }, [characterName, onError]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const filterHandler = event => {
    const characterFilter = event.target.value;
    updateQueryString(characterFilter);
  };

  return (
    <main>
      <PageHero />
      {!canRender && <ErrorMessage>Please Log In</ErrorMessage>}
      {canRender && <FilterForm onChange={filterHandler} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {canRender && characters.length > 0 && !error && (
        <CharactersGallery characters={characters} location={location} />
      )}
    </main>
  );
};

export default HomePage;
