import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { authSelectors } from 'redux/auth';
import { IconButton } from 'components/IconButton';
import logoutButton from 'icons/logout.png';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const emailUser = useSelector(authSelectors.getEmailUser);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <span className={styles.emailUser}>{emailUser}</span>
      <IconButton
        icon={logoutButton}
        size={{ width: '50px' }}
        onClick={() => {
          dispatch(authOperations.logout());
        }}
      />
    </div>
  );
}
