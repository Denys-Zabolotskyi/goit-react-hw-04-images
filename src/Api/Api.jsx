import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29344300-7dc520cb37f9e72405df75692';
const BASE_FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&key=${API_KEY}&image_type=${BASE_FILTERS}&page=${page}`
  );
  // console.log(response.data.hits);
  return response.data.hits;
};
