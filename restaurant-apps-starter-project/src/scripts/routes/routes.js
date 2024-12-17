import Menu from '../views/pages/menu';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Menu,
  '/menu': Menu,
  '/detail/:id' : Detail,
  '/like': Like,
};

export default routes;
