import { Navigation, UserMenu, AuthNav } from 'components';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
