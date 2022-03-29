import { Loader, Button, ImageGallery } from '../../components';
import { useFetchData, Status } from 'hooks';
import propTypes from 'prop-types';
import styles from './ImageFinder.module.css';

export default function ImageFinder({ searchQuery, getImageUrl }) {
  const { images, messagesEndRef, status, loadMore, error } =
    useFetchData(searchQuery);

  console.log('images: ', images);
  console.log('messagesEndRef: ', messagesEndRef);
  console.log('status: ', status);
  console.log('loadMore: ', loadMore);
  console.log('error: ', error);

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
        <Button loadMore={loadMore} />

        <div ref={messagesEndRef} />
      </>
    );
  }
}

ImageFinder.propTypes = {
  searchQuery: propTypes.string.isRequired,
  getImageUrl: propTypes.func.isRequired,
};
