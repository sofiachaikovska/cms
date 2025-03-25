import css from './Header.module.css';

import { useState, useEffect } from 'react';

import DropDownMenu from '../DropDownMenu/DropDownMenu';
import NotificationsDropDown from '../NotificationsDropDown/NotificationsDropDown';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);
  const [isNotificationsDropDownOpen, setIsNotificationsDropDownOpen] =
    useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={css.header}>
        <div className={css.headerContainer}>
          <a className={css.logoLink} href="/">
            CMS
          </a>
          <div className={css.headerInfoContainer}>
            <div className={css.notificationContainer}>
              <button
                className={css.headerBtn}
                onMouseEnter={() => setIsNotificationsDropDownOpen(true)}
                onMouseLeave={() => setIsNotificationsDropDownOpen(false)}
              >
                <div className={css.notification}></div>
                <span className="icon-bell"></span>
              </button>
              {isNotificationsDropDownOpen && <NotificationsDropDown />}
            </div>
            <div
              className={css.userContainer}
              onMouseEnter={() => setIsDropDownMenuOpen(true)}
              onMouseLeave={() => setIsDropDownMenuOpen(false)}
            >
              <button className={css.headerBtn}>
                <span className="icon-user"></span>
                <p className={css.userName}>Sofia Chaikovska</p>
              </button>
              {isDropDownMenuOpen && <DropDownMenu />}
            </div>
            <button className={css.burgerMenuBtn} onClick={toggleMenu}>
              <span className="icon-burger-menu"></span>
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && <MobileMenu onClose={closeMenu} />}
    </>
  );
};

export default Header;
