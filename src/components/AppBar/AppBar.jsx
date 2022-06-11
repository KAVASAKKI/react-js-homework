import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = false;

  return (
    <header className={styles.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
