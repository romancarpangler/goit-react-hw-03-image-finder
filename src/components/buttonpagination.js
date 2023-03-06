import css from '../css.module.css';

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
