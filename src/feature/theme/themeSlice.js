import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode:'light',

};

export const themeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    darkMode: (state, action) => {
      state.themeMode =action.payload
    },
    lightMode: (state, action) => {
      state.themeMode = action.payload
    },
  }
});

export const { darkMode, lightMode } = themeSlice.actions;

export default themeSlice.reducer;
