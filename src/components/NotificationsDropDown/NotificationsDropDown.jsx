import css from './NotificationsDropDown.module.css';

import messages from '../../services/messages.json';

const NotificationsDropDown = () => {
  return (
    <div className={css.notificationsContainer}>
      <ul className={css.notificationsList}>
        {messages.map(({ id, from }) => (
          <li key={id} className={css.notificationsListItem}>
            <div className={css.fromContainer}>
              <span className="icon-user"></span>
              <p className={css.fromName}>{from}</p>
            </div>
            <div className={css.message}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsDropDown;
