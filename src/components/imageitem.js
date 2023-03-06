import { Component } from 'react';
import css from '../css.module.css';
import { Modal } from './modalwindow';

export class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const data = this.props.data;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={this.onModal}
          src={data.webformatURL}
          alt="#"
          className={css.ImageGalleryItem_image}
        />
        {this.state.shownModal && (
          <Modal onClose={this.onModal} img={data.largeImageURL}></Modal>
        )}
      </li>
    );
  }
}
