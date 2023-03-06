import css from '../css.module.css';
import { Component } from 'react';
import { Searchbar } from './searchbar';
import { ImageGallery } from './imagelist';
import { api } from 'api';
import { Button } from './buttonpagination';
export class App extends Component {
  state = {
    data: [],
    search: '',
    pageNumder: 1,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const data = await api(this.state.search, this.state.pageNumder);
    this.setState(prevState => ({ data: [...prevState.data, ...data] }));
  };

  handleSubmit = async value => {
    this.setState({ search: value });
  };

  clickButtonPagination = () => {
    this.setState(prevState => ({
      pageNumder: [prevState.pageNumder + 1],
    }));
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar submit={this.handleSubmit} />

        {this.state.search && <ImageGallery data={this.state.data} />}

        {this.state.search && (
          <Button click={this.clickButtonPagination}></Button>
        )}
      </div>
    );
  }
}
