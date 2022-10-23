export const initialNotificationState = {
  notifications: [],
};

export const notificationsActions = {
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
};

export const notificationReducer = (state, action) => {
  switch (action.type) {
    case notificationsActions.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case notificationsActions.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};
