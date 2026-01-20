import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteslice';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
