import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <p className={css.loadingText}>Loading...</p>
    </div>
  );
};

export default Loader;
