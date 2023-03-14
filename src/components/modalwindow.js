import css from '../css.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ onModal, img }) => {
  useEffect(() => {
    const keyDown = event => {
      if (event.code === 'Escape') {
        onModal();
      }
    };

    window.addEventListener('keydown', keyDown);
    return window.removeEventListener('keydown', keyDown);
  }, [onModal]);

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onModal();
    }
  };

  return (
    <div onClick={onOverlayClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={img} alt="#" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModal: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};
