import React, { useReducer, createContext, useContext } from 'react';
import {
  notificationReducer,
  notificationsActions,
  initialNotificationState,
} from 'reducers/notifications.reducer';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialNotificationState);

  const addNotification = (notification) => {
    const id = Math.random();

    dispatch({ type: notificationsActions.ADD_NOTIFICATION, payload: { ...notification, id } });

    setTimeout(() => {
      dispatch({ type: notificationsActions.REMOVE_NOTIFICATION, payload: id });
    }, 3000);
  };

  const removeNotification = (notificationId) => {
    dispatch({ type: notificationsActions.REMOVE_NOTIFICATION, payload: notificationId });
  };

  const value = {
    notifications: state.notifications,
    addNotification,
    removeNotification,
  };
  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};

export default NotificationProvider;
