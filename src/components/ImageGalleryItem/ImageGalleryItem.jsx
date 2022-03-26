import styles from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

const ImageGalleryItem = ({ getImageUrl, image }) => {
  return (
    <li className={styles.item}>
      <img
        onClick={getImageUrl}
        className={styles.image}
        src={image.imageURL}
        alt=""
        data-source={image.largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  getImageUrl: propTypes.func.isRequired,
  images: propTypes.shape({
    id: propTypes.number.isRequired,
    imageURL: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
