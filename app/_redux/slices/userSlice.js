import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saved: [],
  name: 'Guest',
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToSavedItems: (state, action) => {
      state.saved = [...state.saved, action.payload];
    },
    removeFromSavedItems: (state, action) => {
      state.saved = state.saved.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToSavedItems, removeFromSavedItems } = userSlice.actions;
export const getSavedItems = (state) => state.user.saved;

export default userSlice.reducer;
