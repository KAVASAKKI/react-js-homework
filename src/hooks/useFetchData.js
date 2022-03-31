import { useEffect, useState, useRef } from 'react';
import { fetchImages } from 'services/imagesAPI';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const useFetchData = searchQuery => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (searchQuery) {
      setPage(1);
      setImages([]);

      setStatus(Status.PENDING);
      fetchData(1);
    }
  }, [searchQuery]); // eslint-disable-line

  useEffect(() => {
    if (page !== 1) {
      setStatus(Status.PENDING);
      fetchData();
    }
  }, [page]); // eslint-disable-line

  async function fetchData(newPage = page) {
    try {
      const data = await fetchImages(searchQuery, newPage);

      setImages(prevImages => [...prevImages, ...getImages(data)]);
      setStatus(Status.RESOLVED);

      scrollToBottom();
    } catch (error) {
      setError(error.message);
      setStatus(Status.REJECTED);
      throw new Error(error);
    }
  }

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

  return { images, status, error, setPage, messagesEndRef };
};
