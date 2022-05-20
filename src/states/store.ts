import { configureStore } from '@reduxjs/toolkit';

import recommandIndex from './recommandIndex';
import searchValue from './searchValue';

export const store = configureStore({
  reducer: {
    recommandIndex,
    searchValue,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
