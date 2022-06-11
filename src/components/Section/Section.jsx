import PropTypes from 'prop-types';
import styles from './Section.module.css';

export default function Section({ color = 'black', title, children }) {
  return (
    <>
      <h1 style={{ color }} className={styles.title}>
        {title}
      </h1>
      {children}
    </>
  );
}

Section.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
