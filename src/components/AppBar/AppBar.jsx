import { Navigation } from 'components';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.container}>
      <Navigation />
    </header>
  );
}
