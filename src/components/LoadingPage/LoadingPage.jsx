import { Loader } from 'components/Loader';
import styles from './LoadingPage.module.css';

export const LoadingPage = () => (
  <div className={styles.container}>
    <Loader className={styles.Loader} />
  </div>
);
