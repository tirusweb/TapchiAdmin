import { configureStore } from '@reduxjs/toolkit';
import userSlide from './slides/usersSlide';

const store = configureStore({
    reducer: {
        usersReducer: userSlide,
    },
});

export default store;
