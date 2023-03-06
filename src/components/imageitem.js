import { Component } from 'react';
import css from '../css.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const data = this.props.data;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={data.webformatURL}
          alt="#"
          className={css.ImageGalleryItem_image}
        />
      </li>
    );
  }
}
