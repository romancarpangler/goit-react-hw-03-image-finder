import { useState } from 'react';
import css from '../css.module.css';
import { Modal } from './modalwindow';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ data }) => {
  const { tags, webformatURL, largeImageURL } = data;
  const [showModal, setshowModal] = useState(false);

  const onModal = () => {
    setshowModal(!showModal);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={onModal}
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItem_image}
      />
      {showModal && <Modal onModal={onModal} img={largeImageURL}></Modal>}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.object.isRequired,
};
