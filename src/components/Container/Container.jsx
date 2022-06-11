import PropTypes from 'prop-types';
import styles from './Container.module.css';

export default function Container({ children, size }) {
  return (
    <div className={styles.container} style={size}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
