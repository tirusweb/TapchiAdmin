import { http } from './http';

export const apiLogin = (data) => {
    return http.post('api/login', data);
};

export const apiLogout = () => {
    return http.put('/user/logout');
};

export const apiGetUser = ({ currentPage, pageSize }) => {
    return http.get(`/user/search?pageIndex=${currentPage}&pageSize=${pageSize}`);
};

export const apiGetUserDetail = (username) => {
    return http.get(`user/${username}`);
};

export const apiCreateUser = (data) => {
    return http.post('/user', data);
};

export const apiEditUser = (id, data) => {
    return http.put(`user/${id}`, data);
};

export const apiDeleteUser = (id) => {
    return http.delete(`user/${id}`);
};
