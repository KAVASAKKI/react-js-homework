import { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.backdrop} onClick={this.onBackdropClick}>
        <div>
          <img
            src={this.props.imageURL}
            alt={this.props.alt}
            className={styles.image}
          />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  imageURL: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
  alt: propTypes.string.isRequired,
};

export default Modal;
