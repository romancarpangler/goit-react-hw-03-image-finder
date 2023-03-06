import css from '../css.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) {
      console.log(this.state.value);
      return alert('тут може бути ваша реклама');
    }

    this.props.submit(this.state.value.toLocaleLowerCase());
  };

  handleChenge = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchForm_button}>
            search
          </button>

          <input
            onChange={this.handleChenge}
            className={css.searchForm_input}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
