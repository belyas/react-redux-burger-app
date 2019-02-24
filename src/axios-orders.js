import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://[YOUR-OWN-SUBDOMAIN].firebaseio.com/'
});

export default instance;