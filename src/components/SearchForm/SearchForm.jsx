import { useState } from 'react';
import styles from './SearchForm.module.css';

export default function SearchForm({ getQuery }) {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    getQuery(query);
    setQuery('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <button type="submit" className={styles.submit}>
        Submit
      </button>
    </form>
  );
}
