import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

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
    <form onSubmit={onSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          required
          onChange={onChange}
          value={name}
        />
      </label>

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
        Submit
      </button>
    </form>
  );
}
