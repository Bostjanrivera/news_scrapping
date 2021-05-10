import UserDetail from '../pages/UserDetail';
import ViewNew from '../pages/ViewNew';

const routes = {
    '/': UserDetail,
    '/:category': UserDetail,
    '/:id': ViewNew,
};


export default routes;