import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export default function Notification({ message }) {
  return <p className={styles.text}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
