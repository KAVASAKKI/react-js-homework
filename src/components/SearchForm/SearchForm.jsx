import { useState } from 'react';
import styles from './SearchForm.module.css';

export const SearchForm = ({ onSubmit: handleSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    handleSubmit(query);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <button type="submit" className={styles.button} />
        <input
          className={styles.input}
          placeholder="Enter movie name..."
          type="text"
          value={query || ''}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};
