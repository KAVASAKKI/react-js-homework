import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
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
          onChange={onChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          required
          onChange={onChange}
          value={password}
        />
      </label>

      <button className={styles.button} type="submit">
        Login in
      </button>
    </form>
  );
}
