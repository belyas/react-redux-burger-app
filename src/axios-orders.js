import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://[YOU-URL].firebaseio.com/'
});

export default instance;