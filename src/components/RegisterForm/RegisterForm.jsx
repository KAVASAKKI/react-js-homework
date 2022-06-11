import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          required
          //   onChange={onChange}
          //   value={name}
        />
      </label>

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
