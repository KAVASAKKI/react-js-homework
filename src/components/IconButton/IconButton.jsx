import styles from './IconButton.module.css';

export default function IconButton({ icon, size, onClick }) {
  return (
    <button className={styles.button}>
      <img src={icon} alt="" {...size} onClick={onClick} />
    </button>
  );
}
