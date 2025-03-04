import css from './DropDownMenu.module.css';

const DropDownMenu = () => {
  return (
    <div className={css.dropDownMenuContainer}>
      <ul className={css.dropDownList}>
        <li className={css.dropDownListItem}>Profile</li>
        <li className={css.dropDownListItem}>Log Out</li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
