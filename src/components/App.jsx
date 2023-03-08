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
    totalHits: 0,
    search: '',
    pageNumder: 1,
    loader: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search &&
      this.state.data.length !== 0
    ) {
      this.setState({ data: [], pageNumder: 1 });
    }
    if (
      prevState.search !== this.state.search ||
      prevState.pageNumder !== this.state.pageNumder
    ) {
      setTimeout(() => {
        this.fetchImages();
      }, 0);
    }
  }

  fetchImages = async () => {
    this.setState({ loader: true });

    const data = await api(this.state.search, this.state.pageNumder);
    this.setState(prevState => ({ data: [...prevState.data, ...data.hits] }));

    this.setState(() => ({
      totalHits: data.totalHits,
    }));

    this.setState({ loader: false });

    setTimeout(() => {
      console.log(this.state.totalHits);
    }, 0);
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
        {this.state.data.length > 0 && <ImageGallery data={this.state.data} />}

        {this.state.totalHits > this.state.data.length && (
          <Button click={this.clickButtonPagination}></Button>
        )}
        {this.state.data.length === 0 && this.state.search && (
          <p>нічого не знайшли ідіть і не повертайтеся</p>
        )}
      </div>
    );
  }
}
// totalHits > items.length;
