import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, imageURL, alt }) {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    console.log('Слушатель добавлен');

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      console.log('Слушатель удалён');
    };
  });

  function onKeyDown(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return createPortal(
    <div className={styles.backdrop} onClick={onBackdropClick}>
      <div>
        <img src={imageURL} alt={alt} className={styles.image} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  imageURL: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
  alt: propTypes.string.isRequired,
};
