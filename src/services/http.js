import axios from 'axios';

export const http = axios.create({
    baseURL: `http://tapchikhcn.uneti.edu.vn/api/`,
});
