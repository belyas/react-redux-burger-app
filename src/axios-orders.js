import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://[YOUR-URL].firebaseio.com/'
});

export default instance;