import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <a className={css.logoLink} href="/">
          CMS
        </a>
        <div className={css.headerInfoContainer}>
          <button className={css.headerBtn}>
            <svg
              className={css.bellIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 32"
              fill="none"
              stroke="white"
              strokeWidth="0.1"
            >
              <path d="M16 2v1.117c4.531 0.719 8 4.645 8 9.383v2.088c0 2.838 0.969 5.594 2.738 7.812l0.931 1.163c0.363 0.45 0.431 1.069 0.181 1.587s-0.775 0.85-1.35 0.85h-25c-0.577 0-1.102-0.331-1.352-0.85s-0.18-1.137 0.181-1.587l0.932-1.163c1.773-2.219 2.739-4.975 2.739-7.813v-2.088c0-4.737 3.469-8.663 8-9.383v-1.117c0-1.104 0.894-2 2-2s2 0.896 2 2v0zM13.5 6c-3.588 0-6.5 2.912-6.5 6.5v2.088c0 2.994-0.867 5.912-2.481 8.412h18.962c-1.613-2.5-2.481-5.419-2.481-8.412v-2.088c0-3.588-2.913-6.5-6.5-6.5h-1zM18 28c0 1.006-0.419 2.081-1.169 2.831s-1.825 1.169-2.831 1.169c-1.063 0-2.081-0.419-2.831-1.169s-1.169-1.825-1.169-2.831h8z"></path>
            </svg>
          </button>
          <button className={css.headerBtn}>
            <svg
              className={css.userIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -1 32 34"
              fill="none"
              stroke="white"
              strokeWidth="1"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M31.067 16c0 8.321-6.746 15.067-15.067 15.067s-15.067-6.746-15.067-15.067c0-8.321 6.746-15.067 15.067-15.067s15.067 6.746 15.067 15.067z"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M16 19.867c-4.667 0-8.667 2.667-10.667 6.667 2.667 2.8 6.533 4.4 10.667 4.4s8-1.733 10.667-4.4c-2-3.867-6-6.667-10.667-6.667z"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M20.8 11.6c0 2.651-2.149 4.8-4.8 4.8s-4.8-2.149-4.8-4.8c0-2.651 2.149-4.8 4.8-4.8s4.8 2.149 4.8 4.8z"
              ></path>
            </svg>
            <p className={css.userName}>Sofia</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
