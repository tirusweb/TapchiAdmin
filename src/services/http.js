import axios from 'axios';

export const http = axios.create({
    baseURL: `http://tapchikhcn.uneti.edu.vn/api/`,
});

http.interceptors.request.use(
    (config) => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

http.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if ((error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = sessionStorage.getItem('refreshToken');
            if (!refreshToken) {
                window.location.href = '/login';
                return Promise.reject(error);
            }

            try {
                const response = await axios.put('http://tapchikhcn.uneti.edu.vn/api/user/refresh-token', {
                    params: { token: refreshToken },
                });

                const resData = response.data;
                console.log('>>res: ', resData);

                if (resData?.code === 500) {
                    sessionStorage.removeItem('accessToken');
                    sessionStorage.removeItem('refreshToken');
                    window.location.href = '/login';
                    return Promise.reject(new Error('Refresh token failed'));
                } else {
                    sessionStorage.setItem('accessToken', resData?.accessToken);
                    sessionStorage.setItem('refreshToken', resData?.refreshToken);
                    originalRequest.headers['Authorization'] = `Bearer ${resData?.accessToken}`;
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(http(originalRequest));
                        }, 100);
                    });
                }
            } catch (refreshError) {
                console.log('>>>ERR: ', refreshError);
                sessionStorage.removeItem('accessToken');
                sessionStorage.removeItem('refreshToken');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    },
);
