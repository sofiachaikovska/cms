import css from './PaginationSection.module.css';

const PaginationSection = () => {
  return (
    <div className={css.paginationContainer}>
      <ul className={css.pageList}>
        <li className={css.arrowIcon}>
          <span className="icon-arrow-left"></span>
        </li>
        <li className={`${css.pageNumberItem} ${css.pageActive}`}>1</li>
        <li className={css.pageNumberItem}>2</li>
        <li className={css.pageNumberItem}>3</li>
        <li className={css.pageNumberItem}>4</li>
        <li className={css.arrowIcon}>
          <span className="icon-arrow-right"></span>
        </li>
      </ul>
    </div>
  );
};

export default PaginationSection;
