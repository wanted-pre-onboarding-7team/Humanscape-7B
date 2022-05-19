import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';

interface INIT_STATE {
  value: string;
}

const initialState: INIT_STATE = {
  value: '',
};

const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue(state: INIT_STATE, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const searchValueActions = searchSlice.actions;

export const getSearchValue = (state: RootState) => state.searchValue.value;
