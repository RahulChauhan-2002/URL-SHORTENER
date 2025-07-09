import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // add your slices here
  },
});

export default store;
