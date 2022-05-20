import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';

interface INIT_STATE {
  index: number;
}

const initialState: INIT_STATE = {
  index: -1,
};

const recommendIndexSlice = createSlice({
  name: 'recommendIndex',
  initialState,
  reducers: {
    increaseIndex(state: INIT_STATE, action: PayloadAction<number>) {
      if (state.index >= action.payload - 1) {
        state.index = 0;
      } else {
        state.index += 1;
      }
    },
    decreaseIndex(state: INIT_STATE, action: PayloadAction<number>) {
      if (state.index < 0) {
        state.index = action.payload - 1;
      } else {
        state.index -= 1;
      }
    },
    resetIndex(state: INIT_STATE) {
      state.index = -1;
    },
  },
});

export default recommendIndexSlice.reducer;

export const recommendIndexActions = recommendIndexSlice.actions;

export const getRecommendIndex = (state: RootState) => state.recommendIndex.index;
