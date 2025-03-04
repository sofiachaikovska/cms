import css from './NavSidebar.module.css';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const NavSidebar = () => {
  return (
    <aside className={css.navSidebar}>
      <nav className={css.navContainer}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.activeLink]: isActive })
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.activeLink]: isActive })
          }
          to="/"
        >
          Students
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.activeLink]: isActive })
          }
          to="/tasks"
        >
          Tasks
        </NavLink>
      </nav>
    </aside>
  );
};

export default NavSidebar;
