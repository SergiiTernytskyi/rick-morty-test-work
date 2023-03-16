import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  const axiosURL = '/character/';
  const { data } = await axios.get(axiosURL);
  return data;
}

export async function getCharacterByName(value) {
  const axiosUrl = `character/?name=${value}`;
  const { data } = await axios.get(axiosUrl);
  return data;
}

export async function getCharacterById(id) {
  const axiosURL = `character/${id}`;
  const { data } = await axios.get(axiosURL);
  return data;
}

// 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
//
