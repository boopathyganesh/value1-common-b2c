import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveLinkState {
  link: string;
}

const initialState: ActiveLinkState = {
  link: '/reward-store', // default active link
};

const activeLinkSlice = createSlice({
  name: 'activeLink',
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
  },
});

export const { setActiveLink } = activeLinkSlice.actions;
export default activeLinkSlice.reducer;
