import Assets from '../views/Assets';
import Dashboard from '../views/Dashboard';
import NotFound from '../views/NotFound';
import Components from '../views/SampleComponent';

export const routes = [
  {
    path: '/',
    Component: Dashboard,
    isProtected: false,
    name: 'dashboard',
  },
  {
    path: '/components',
    Component: Components,
  },
  {
    path: '/assets',
    Component: Assets,
  },
  {
    path: '*',
    Component: NotFound,
  },
];
