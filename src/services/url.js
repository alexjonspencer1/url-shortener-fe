import { post } from './request';

const BASE_URL = 'http://localhost:7891';

export const postUrl = (url) => post(`${BASE_URL}`, { originalUrl: url });
