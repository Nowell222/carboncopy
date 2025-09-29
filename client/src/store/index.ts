import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import emissionsSlice from './emissionsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    emissions: emissionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
