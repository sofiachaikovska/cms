import css from './MobileMenu.module.css';

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

const MobileMenu = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  return (
    <>
      <div
        className={clsx(css.mobileMenuContainer, {
          [css.closing]: isClosing,
        })}
      ></div>
      <div
        className={clsx(css.mobileMenuInnerContainer, {
          [css.closingInner]: isClosing,
        })}
      >
        <button className={css.closeBtn} onClick={handleClose}>
          <span className="icon-remove"></span>
        </button>
        <nav className={css.navContainer}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.headerLink, { [css.activeLink]: isActive })
            }
            to="/dashboard"
            onClick={handleClose}
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.headerLink, { [css.activeLink]: isActive })
            }
            to="/"
            onClick={handleClose}
          >
            Students
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.headerLink, { [css.activeLink]: isActive })
            }
            to="/tasks"
            onClick={handleClose}
          >
            Tasks
          </NavLink>
        </nav>
        <div className={css.userNav}>
          <ul className={css.userNavList}>
            <li className={css.userNavListItem}>Profile</li>
            <li className={css.userNavListItem}>Log Out</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
