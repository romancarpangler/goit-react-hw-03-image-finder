import { Component } from 'react';
import { Searchbar } from './searchbar';
import { ImageGallery } from './imagelist';
import { Api } from 'api';

export class App extends Component {
  state = {
    search: '',
    pageNumder: 1,
  };

  handleSubmit = value => {
    this.setState({ search: value });
  };

  render() {
    return (
      <>
        <Searchbar submit={this.handleSubmit} />

        {this.state.search && <ImageGallery />}
        {this.state.search && (
          <Api query={this.state.search} pageNumder={this.state.pageNumder} />
        )}
      </>
    );
  }
}
