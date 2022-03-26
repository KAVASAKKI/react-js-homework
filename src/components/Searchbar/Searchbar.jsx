import { Component } from 'react';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return toast.error('Enter a search query!');
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <>
        <header className={styles.container}>
          <form className={styles.form} onSubmit={this.onSubmit}>
            <button className={styles.button} type="submit">
              <span className={styles.buttonLabel}>Search</span>
            </button>

            <input
              className={styles.input}
              type="text"
              placeholder="Search images and photos"
              onChange={this.onChange}
              value={this.state.searchQuery}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = { onSubmit: propTypes.func.isRequired };
