import NewsDetail from '../pages/NewsDetail';
import ViewNew from '../pages/ViewNew';
import ViewCategory from '../pages/ViewCategory'

const routes = {
    '/': NewsDetail,
    '/category/:name': ViewCategory,
    '/:id': ViewNew,
};

export default routes;