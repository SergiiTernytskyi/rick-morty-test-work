import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters(page) {
  const axiosURL = `/character/?page=${page}`;
  const { data } = await axios.get(axiosURL);
  return data;
}

export async function getCharacterByName(value, page) {
  const axiosUrl = `character/?name=${value}&page=${page}`;
  const { data } = await axios.get(axiosUrl);
  return data;
}

export async function getCharacterById(id) {
  const axiosURL = `character/${id}`;
  const { data } = await axios.get(axiosURL);
  return data;
}
