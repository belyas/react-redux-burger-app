import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://[your-url].firebaseio.com/'
});

export default instance;