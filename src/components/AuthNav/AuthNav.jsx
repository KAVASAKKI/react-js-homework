import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  const makeClassName = ({ isActive }) => {
    return `${styles.link} ${isActive ? styles.activeLink : ''}`;
  };

  return (
    <ul className={styles.list}>
      <NavLink to="/register" children="Register" className={makeClassName} />

      <NavLink to="/login" children="Login" className={makeClassName} />
    </ul>
  );
}
