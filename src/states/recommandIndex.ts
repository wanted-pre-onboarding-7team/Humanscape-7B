import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';

interface INIT_STATE {
  index: number;
}

const initialState: INIT_STATE = {
  index: -1,
};

const recommandIndexSlice = createSlice({
  name: 'recommandIndex',
  initialState,
  reducers: {
    setIndex(state: INIT_STATE, action: PayloadAction<number>) {
      state.index = action.payload;
    },
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

export default recommandIndexSlice.reducer;

export const recommandIndexActions = recommandIndexSlice.actions;

export const getRecommandIndex = (state: RootState) => state.recommandIndex.index;
