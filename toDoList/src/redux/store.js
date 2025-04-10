import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer, // Reducer que gestiona los usuarios
  },
});
