import axios from 'axios';

const BASE_URl = 'https://pixabay.com/api/';
const KEY = '32827257-9a0fc54d12c963eef1dafe00d';
const URL = '&image_type=photo&orientation=horizontal&per_page=12';

export async function api(query, pageNumder) {
  return await axios
    .get(`${BASE_URl}?q=${query}&page=${pageNumder}&key=${KEY}${URL}`)
    .then(response => {
      if (response.status !== 200) {
        return new Error(response.status);
      }

      return response.data.hits;
    });
}
