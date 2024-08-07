import { apiLogin } from '+/services/Users';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: sessionStorage.getItem('accessToken') || null,
    refreshToken: sessionStorage.getItem('refreshToken') || null,
    loading: false,
    error: null,
};

export const axiosLogin = createAsyncThunk('login/loginUser', async (data) => {
    try {
        const response = await apiLogin(data);
        return response.data;
    } catch (err) {
        console.log('>>> Error fetching login: ', err);
    }
});

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(axiosLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(axiosLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.accessToken = action.payload?.accessToken;
                state.refreshToken = action.payload?.refreshToken;
                state.error = null;
                sessionStorage.setItem('accessToken', action?.payload?.accessToken);
                sessionStorage.setItem('refreshToken', action?.payload?.refreshToken);
            })
            .addCase(axiosLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Có 1 vài lỗi đang xảy ra';
            });
    },
});

export default loginSlice.reducer;
