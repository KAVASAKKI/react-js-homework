import { useParams } from 'react-router-dom';

export const useSlug = () => {
  const { slug } = useParams();
  const movieId = slug.match(/[0-9a-z]+$/)[0];
  return { slug, movieId };
};
