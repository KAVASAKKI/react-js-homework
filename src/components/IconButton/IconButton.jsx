import styles from './IconButton.module.css';

export default function IconButton({ icon, size }) {
  return (
    <button className={styles.button}>
      <img src={icon} alt="" {...size} />
    </button>
  );
}
