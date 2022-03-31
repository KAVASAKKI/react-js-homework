import propTypes from 'prop-types';
import { Loader, Button, ImageGallery } from '../../components';
import { useFetchData, Status } from 'hooks';
import styles from './ImageFinder.module.css';

export default function ImageFinder({ searchQuery, getImageUrl }) {
  const { images, status, error, setPage, messagesEndRef } =
    useFetchData(searchQuery);

  if (status === Status.IDLE) {
    return (
      <div className={styles.container}>
        <h1>Please enter some bullshit</h1>
      </div>
    );
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return (
      <div className={styles.container}>
        <h1>{error}</h1>
      </div>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery getImageUrl={getImageUrl} images={images} />
        <Button setPage={setPage} />

        <div ref={messagesEndRef} />
      </>
    );
  }
}

ImageFinder.propTypes = {
  searchQuery: propTypes.string.isRequired,
  getImageUrl: propTypes.func.isRequired,
};
