import Error404 from './Error404';
import Home from "./Home"
const Resources = require('../resources/Resources');

const UserDetail = async () => {
    const response = await Resources.getNewsForHome();
    const news = response;
    if (!news) {
        return Error404();
    }

    let view = "";
    view = Home(news)
    return view;
}

export default UserDetail;