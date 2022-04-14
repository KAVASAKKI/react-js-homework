import { useState } from 'react';
import styles from './SearchForm.module.css';

export default function SearchForm({ submitQuery }) {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    submitQuery(query);
    setQuery('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <button type="submit" className={styles.button}></button>
        <input
          className={styles.input}
          placeholder="Search movies..."
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
