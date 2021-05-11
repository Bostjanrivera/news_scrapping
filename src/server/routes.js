import UserDetail from '../pages/UserDetail';
import ViewNew from '../pages/ViewNew';
import ViewCategory from '../pages/ViewCategory'

const routes = {
    '/': UserDetail,
    '/category/:name': ViewCategory,
    '/:id': ViewNew,
};

export default routes;