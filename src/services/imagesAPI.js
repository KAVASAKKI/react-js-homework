import axios from 'axios';

export const fetchImages = async (search, page) => {
  const API_KEY = '25648559-9cac4d1311f1c323ef3f81d16';
  const params = {
    baseURL: 'https://pixabay.com/api/',
    url: `?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  };

  try {
    const response = await axios(params);
    const images = response.data.hits;

    if (!images.length) {
      return Promise.reject(
        new Error(`Not found images with name '${search}'`),
      );
    }

    return images;
  } catch {
    return Promise.reject(new Error('Server not responding'));
  }
};
