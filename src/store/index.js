import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authSlice from './authSlice.js';

const reducers = combineReducers({
  auth: authSlice.reducer,
});

const store = configureStore({
  reducer: reducers
})

export default store;
