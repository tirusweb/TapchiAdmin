import { http } from './http';

export const apiGetUser = () => {
    return http.get(`/api/Users`);
};

export const apiGetUserDetail = (id) => {
    return http.get(`api/Users/${id}`);
};

export const apiCreateUser = (data) => {
    return http.post(`/api/Users`, data);
};

export const apiEditUser = (id, data) => {
    return http.put(`api/Users/${id}`, data);
};

export const apiDeleteUser = (id) => {
    return http.delete(`api/User/${id}`);
};
