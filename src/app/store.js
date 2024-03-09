import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../feature/theme/themeSlice'
export const store=configureStore({
  reducer:{
    themeMode:themeReducer
  }
})