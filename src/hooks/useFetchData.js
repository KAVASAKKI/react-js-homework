import { useEffect, useState, useRef, useCallback } from 'react';
import fetchImages from 'services/images-api';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const useFetchData = searchQuery => {
  const [status, setStatus] = useState(Status.IDLE);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const fetchMyData = useCallback(async newSearch => {
    setPage(1);
    setStatus(Status.PENDING);

    const data = await fetchData(newSearch);

    if (data.length) {
      setImages(getImages(data));
      setStatus(Status.RESOLVED);

      scrollToBottom();

      return data;
    }

    setError(`Not found images with name '${newSearch}'`);
    setStatus(Status.REJECTED);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetchMyData(searchQuery);
    }
  }, [fetchMyData, searchQuery]);

  async function fetchData(url, page = 1) {
    try {
      return fetchImages(url, page);
    } catch (error) {
      setStatus(Status.REJECTED);
      setError(error);
    }
  }

  const loadMore = async () => {
    const newPage = page + 1;

    setPage(newPage);
    setStatus(Status.PENDING);

    const data = await fetchData(searchQuery, newPage);

    setImages(prevState => [...prevState, ...getImages(data)]);
    setStatus(Status.RESOLVED);

    scrollToBottom();
  };

  function getImages(data) {
    return data.map(image => ({
      id: image.id,
      imageURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    }));
  }

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return { images, messagesEndRef, status, loadMore, error };
};
