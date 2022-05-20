import { configureStore } from '@reduxjs/toolkit';

import recommendIndex from './recommendIndex';
import searchValue from './searchValue';

export const store = configureStore({
  reducer: {
    recommendIndex,
    searchValue,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
