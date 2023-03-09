import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { PageHero } from 'components/PageHero/PageHero';
import { CharactersGallery } from 'components/CharactersGallery/CharactersGallery';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { FilterForm } from 'components/FilterForm/FilterForm';

import { getAllCharacters, getCharacterByName } from 'services/charactersApi';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams?.get('name') ?? '';

  useEffect(() => {
    setError(null);

    const getCharacters = async () => {
      try {
        const data = await getAllCharacters();
        const sortedCharacters = data.results
          .map(({ id, name, image, species }) => {
            return { id, name, image, species };
          })
          .sort((firstCharacter, secondCharacter) =>
            firstCharacter.name.localeCompare(secondCharacter.name)
          );

        setCharacters(sortedCharacters);
      } catch (error) {
        if (error.response.status === 404) {
          return setError('Not found');
        }
        setError('Something went wrong');
      }
    };

    const getFilteredCharacters = async () => {
      try {
        const data = await getCharacterByName(characterName);

        if (data === []) {
          setError('We did not find anything');
        }

        const sortedCharacters = data.results
          .map(({ id, name, image, species }) => {
            return { id, name, image, species };
          })
          .sort((firstCharacter, secondCharacter) =>
            firstCharacter.name.localeCompare(secondCharacter.name)
          );

        setCharacters(sortedCharacters);
      } catch (error) {
        if (error.response.status === 404) {
          return setError('Not found');
        }
        setError('Something went wrong');
      }
    };

    if (characterName) {
      getFilteredCharacters(characterName);
      return;
    }
    getCharacters();
  }, [characterName]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const filterHandler = event => {
    event.preventDefault();

    const characterFilter = event.target.value;
    updateQueryString(characterFilter);
  };

  return (
    <main>
      <PageHero />
      <FilterForm onChange={filterHandler} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {characters.length > 0 && !error && (
        <CharactersGallery characters={characters} location={location} />
      )}
    </main>
  );
};

export default HomePage;
