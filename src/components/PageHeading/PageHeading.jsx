import styles from './PageHeading.module.css';

export default function PageHeading({ children }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}
