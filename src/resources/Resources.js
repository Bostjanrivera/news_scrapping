const Resources = module.exports;

const axios = require('axios');

// const BASE_URL = 'https://randomuser.me/api/?results=10';
const BASE_URL = 'https://gentle-taiga-63852.herokuapp.com';


Resources.getAllNews = async () => {
    const url = `${BASE_URL}/news`;

    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log('fetch error', error);
    }
};
Resources.getNewsForHome = async () => {
    const url = `${BASE_URL}/new?offset=500&per_page=20`;

    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log('fetch error', error);
    }
};


Resources.getNewById = async (id) => {
    const url = `${BASE_URL}/new/${id}`;

    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        console.log('fetch error', error);
    }

}

Resources.getNewsByTag = async (tag) => {
    const url = `${BASE_URL}/tag/${tag}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log('fetch error', error);
    }

}