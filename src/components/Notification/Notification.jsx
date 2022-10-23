import React from 'react';
import { useNotificationContext } from 'context';
import { ReactComponent as CloseSVG } from './x-circle.svg';
import styles from './Notification.module.css';

const Notification = () => {
  const { notifications, removeNotification } = useNotificationContext();

  const onRemove = (notificationId) => () => {
    removeNotification(notificationId);
  };

  if (!notifications.length) return null;

  return (
    <div className={styles.notificationWrapper}>
      <ul className={styles.notificationList}>
        {notifications.map((notification) => (
          <li key={notification.id} className={`${styles.notificationItem} ${notification.type}`}>
            <button className={styles.closeBtn} onClick={onRemove(notification.id)}>
              <CloseSVG />
            </button>
            <span>{notification.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
