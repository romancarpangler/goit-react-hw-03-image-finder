import css from '../css.module.css';
import { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import { Searchbar } from './searchbar';
import { ImageGallery } from './imagelist';
import { api } from 'api';
import { Button } from './buttonpagination';
export class App extends Component {
  state = {
    data: [],
    search: '',
    pageNumder: 1,
    loader: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.pageNumder !== this.state.pageNumder
    ) {
      this.fetchImages();
    }
    if (
      prevState.search !== this.state.search &&
      this.state.data.length !== 0
    ) {
      this.setState({ data: [] });
    }
  }

  fetchImages = async () => {
    this.setState({ loader: true });

    const data = await api(this.state.search, this.state.pageNumder);
    this.setState(prevState => ({ data: [...prevState.data, ...data] }));

    this.setState({ loader: false });
  };

  handleSubmit = value => {
    this.setState({ search: value });
  };

  clickButtonPagination = () => {
    this.setState(prevState => ({
      pageNumder: prevState.pageNumder + 1,
    }));
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar submit={this.handleSubmit} />
        {this.state.loader && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        )}
        {this.state.search && <ImageGallery data={this.state.data} />}

        {this.state.data.length > 0 && (
          <Button click={this.clickButtonPagination}></Button>
        )}
        {this.state.data.length === 0 && this.state.search && (
          <p>нічого не знайшли ідіть і не повертайтеся</p>
        )}
      </div>
    );
  }
}
