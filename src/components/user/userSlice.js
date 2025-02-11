import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: [],
  name: "Guest",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToSavedItems: (state, action) => {
      state.saved = [...state.saved, action.payload];
    },
  },
});

export const { addToSavedItems } = userSlice.actions;

export default userSlice.reducer;
