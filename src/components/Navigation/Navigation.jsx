import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const makeClassName = ({ isActive }) => {
    return `${styles.link} ${isActive ? styles.activeLink : ''}`;
  };

  return (
    <ul className={styles.list}>
      <NavLink exact="true" to="/" children="Home" className={makeClassName} />

      <NavLink
        exact="true"
        to="/contacts"
        children="Contacts"
        className={makeClassName}
      />
    </ul>
  );
}
