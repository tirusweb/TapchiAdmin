import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const { apiGetUser } = require('+/services/Users');

const initialState = {
    users: [],
    loading: false,
    error: null,
};

export const axiosUsers = createAsyncThunk('users/axiosUsers', async () => {
    try {
        const response = await apiGetUser();
        return {
            data: response?.data,
        };
    } catch (err) {
        console.log('>>> Error fetching users: ', err);
        throw err;
    }
});

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(axiosUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(axiosUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.data;
            })
            .addCase(axiosUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectUsers = (state) => state.usersReducer.users;
export default userSlice.reducer;
