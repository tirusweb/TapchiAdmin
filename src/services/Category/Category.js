// import http from '../http';

import {http} from '../http';

export const apiGetCategory = (token) => {
    return http.get(`api/category/page`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const apiCreateCategory = (data, token) => {
    return http.post(`api/category`, data, { headers: { Authorization: `Bearer ${token}` } });
};

export const apiEdiCategory = (token, id, data) => {
    return http.put(`api/category/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
};

export const apiDeleteCategory = (token, id) => {
    return http.delete(`api/category/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};