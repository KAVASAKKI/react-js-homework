import { useState } from 'react';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import styles from './Searchbar.module.css';

export default function Searchbar({ onSubmit: handleSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  function onSubmit(e) {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.error('Enter a search query!');
    }

    handleSubmit(searchQuery.toLowerCase());
    setSearchQuery('');
  }

  return (
    <header className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <button className={styles.button} type="submit">
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          placeholder="Search images and photos"
          onChange={e => setSearchQuery(e.currentTarget.value)}
          value={searchQuery}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = { onSubmit: propTypes.func.isRequired };
