
import {http} from '../http';

export const apiGetPost = (token , currentPage , pageSize) => {
    return http.get(`/api/post/page?pageIndex=${currentPage}&pageSize=${pageSize}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const apiCreatePost = (data, token) => {
    return http.post(`api/post`, data, { headers: { Authorization: `Bearer ${token}` } });
};


export const apiDeletePost = (token, id) => {
    return http.delete(`api/post/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};



//------------------Banners----------------
export const apiGetBanner = (token ,id) => {
    return http.get(`api/banner/by-post/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};



export const apiCreateBanner = (data, token) => {
    return http.post('api/banner', data, { headers: { Authorization: `Bearer ${token}` } });
};

//------------------UpLoad Files----------------

export const apiUploadImage = (file, token) => {
    const formData = new FormData();
    formData.append('file', file);

    return http.post('api/files/upload-image', formData, { 
        headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        } 
    });
};

