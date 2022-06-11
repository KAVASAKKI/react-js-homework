import styles from './LoginForm.module.css';

export default function LoginForm() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          required
          //   onChange={onChange}
          //   value={name}
        />
      </label>

      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          required
          //   onChange={onChange}
          //   value={name}
        />
      </label>

      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
