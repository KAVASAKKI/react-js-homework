import { ImageGalleryItem } from 'components';
import styles from './ImageGallery.module.css';
import propTypes from 'prop-types';

export default function ImageGallery({ getImageUrl, images }) {
  return (
    <ul className={styles.list}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          getImageUrl={getImageUrl}
          image={image}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  getImageUrl: propTypes.func.isRequired,
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      imageURL: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
    }),
  ),
};
