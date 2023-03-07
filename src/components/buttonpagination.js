import css from '../css.module.css';
import PropTypes from 'prop-types';

export const Button = ({ click }) => {
  return (
    <button
      onClick={() => {
        click();
      }}
      className={css.Button}
      type="button"
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
};
