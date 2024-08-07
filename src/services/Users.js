import { http } from './http';

export const apiLogin = (data) => {
    return http.post(`api/login`, data);
};

export const apiLogout = (token) => {
    return http.put(`/user/logout`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const apiGetUser = ({ token, currentPage, pageSize }) => {
    return http.get(`/user/search?pageIndex=${currentPage}&pageSize=${pageSize}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const apiGetUserDetail = (username, token) => {
    return http.get(`user/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const apiCreateUser = (data, token) => {
    return http.post(`/user`, data, { headers: { Authorization: `Bearer ${token}` } });
};

export const apiEditUser = (token, id, data) => {
    return http.put(`user/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
};

export const apiDeleteUser = (token, id) => {
    return http.delete(`user/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
