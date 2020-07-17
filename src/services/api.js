import axios from 'axios';

// create a new instance of axios with a custom config.
export const _axios = axios.create({
    baseURL: 'https://api.jsonbin.io/b/5ea2fa3e98b3d5375233ca89',
    timeout: 9000,
})





