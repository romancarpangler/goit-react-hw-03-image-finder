import css from '../css.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div onClick={this.onOverlayClose} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.img} alt="#" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};
