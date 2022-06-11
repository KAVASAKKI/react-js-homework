import { IconButton } from 'components/IconButton';
import styles from './UserMenu.module.css';
import logoutButton from 'icons/logout.png';

export default function UserMenu() {
  return (
    <div className={styles.container}>
      <span className={styles.emailUser}>p.omel4enko2002@gmail.com</span>
      <IconButton icon={logoutButton} size={{ width: '50px' }} />
    </div>
  );
}
