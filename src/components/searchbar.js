import css from '../css.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ submit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) {
      return alert('тут може бути ваша реклама');
    }

    submit(value.toLocaleLowerCase());
  };

  const handleChenge = event => {
    const { value } = event.currentTarget;
    setValue(value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchForm_button}>
          search
        </button>

        <input
          onChange={handleChenge}
          className={css.searchForm_input}
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  submit: PropTypes.func.isRequired,
};
