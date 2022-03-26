const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '25648559-9cac4d1311f1c323ef3f81d16';

async function fetchImages(searchQuery, page) {
  const url = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    return error;
  }
}

export default fetchImages;
