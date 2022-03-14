import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import themeSlice from "./themeSlice.js";
import authSlice from './authSlice.js';

const reducers = combineReducers({
  auth: authSlice.reducer,
  theme: themeSlice.reducer,
});

const store = configureStore({
  reducer: reducers
})

export default store;
