import css from '../css.module.css';
import { ImageGalleryItem } from './imageitem';

export const ImageGallery = () => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem></ImageGalleryItem>
    </ul>
  );
};
