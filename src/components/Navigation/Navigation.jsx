import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const makeClassName = ({ isActive }) => {
    return `${styles.link} ${isActive ? styles.activeLink : ''}`;
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <NavLink
          exact="true"
          to="/"
          children="Home"
          className={makeClassName}
        />

        <NavLink
          exact="true"
          to="/movies"
          children="Movies"
          className={makeClassName}
        />

        <div className={styles.underline} />
      </ul>
    </nav>
  );
}
