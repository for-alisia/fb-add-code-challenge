import ProductProvider, { useProductContext } from './ProductsContext';
import AddsProvider, { useAddsContext } from './AddsContext';
import NotificationProvider, { useNotificationContext } from './NotificationsContext';

const Providers = {
  ProductProvider,
  AddsProvider,
  NotificationProvider,
};

export { useProductContext, useAddsContext, useNotificationContext };

export default Providers;
