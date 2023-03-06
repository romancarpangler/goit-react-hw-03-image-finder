import css from '../css.module.css';
import { ImageGalleryItem } from './imageitem';

export const ImageGallery = ({ data }) => {
  return (
    <ul className={css.ImageGallery}>
      {data.map(data => {
        return <ImageGalleryItem key={data.id} data={data} />;
      })}
    </ul>
  );
};
