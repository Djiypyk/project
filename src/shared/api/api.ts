import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

const BASE_URL = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.com';
export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
    },
});
