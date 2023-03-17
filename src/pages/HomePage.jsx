import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { PageHero } from 'components/PageHero/PageHero';
import { CharactersGallery } from 'components/CharactersGallery/CharactersGallery';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { FilterForm } from 'components/FilterForm/FilterForm';

import { getAllCharacters, getCharacterByName } from 'services/charactersApi';
import { Pagination } from 'components/Pagination/Pagination';

const HomePage = ({ canRender }) => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState('');

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams?.get('name') ?? '';
  const appPage = searchParams?.get('page') ?? 1;

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
    setError(null);

    const getCharacters = async () => {
      try {
        const data = await getAllCharacters(appPage);

        setTotalPages(data.info.pages);
        setCharacters(sortCharacter(data));
      } catch (error) {
        if (error.response.status === 404) {
          return setError('Not found');
        }
        setError('Something went wrong');
      }
    };

    const getFilteredCharacters = async () => {
      try {
        const data = await getCharacterByName(characterName, appPage);

        if (!data) {
          setError('We did not find anything');
        }

        setTotalPages(data.info.pages);
        setCharacters(sortCharacter(data));
      } catch (error) {
        if (error.response.status === 404) {
          return setError('Not found');
        }
        setError('Something went wrong');
      }
    };

    if (!canRender) {
      return;
    }

    if (characterName) {
      getFilteredCharacters(characterName);
      return;
    }
    getCharacters();
  }, [appPage, canRender, characterName]);

  const updateQueryString = (name, page = 1) => {
    const nextName = name !== '' ? { name } : {};
    const nextPage = page !== '' ? { page } : {};
    setSearchParams({ ...nextName, ...nextPage });
  };

  const filterHandler = event => {
    const characterFilter = event.target.value.trim();
    updateQueryString(characterFilter);
  };

  const prevHandler = () => {
    if (Number(appPage) < 2) {
      return;
    }
    const prevPage = Number(appPage) - 1;
    updateQueryString(characterName, prevPage);
  };

  const nextHandler = () => {
    if (Number(appPage) === totalPages) {
      return;
    }
    const nextPage = Number(appPage) + 1;
    updateQueryString(characterName, nextPage);
  };

  return (
    <main>
      <PageHero />
      {!canRender && <ErrorMessage>Please Log In</ErrorMessage>}
      {canRender && <FilterForm onChange={filterHandler} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {canRender && characters.length > 0 && !error && (
        <CharactersGallery
          characters={characters.sort((firstCharacter, secondCharacter) =>
            firstCharacter.name.localeCompare(secondCharacter.name)
          )}
          location={location}
        />
      )}
      {canRender && totalPages >= 2 && (
        <Pagination
          prevPage={prevHandler}
          nextPage={nextHandler}
          firstPage={() => updateQueryString(characterName, 1)}
          lastPage={() => updateQueryString(characterName, totalPages)}
          totalPages={totalPages}
          currentPage={appPage}
        />
      )}
    </main>
  );
};

export default HomePage;
