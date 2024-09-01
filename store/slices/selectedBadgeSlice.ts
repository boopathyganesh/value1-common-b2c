import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedBadgeState {
  badge: string;
}

const initialState: SelectedBadgeState = {
  badge: 'Fashion',
};

const selectedBadgeSlice = createSlice({
  name: 'selectedBadge',
  initialState,
  reducers: {
    setSelectedBadge: (state, action: PayloadAction<string>) => {
      state.badge = action.payload;
    },
  },
});

export const { setSelectedBadge } = selectedBadgeSlice.actions;
export default selectedBadgeSlice.reducer;
