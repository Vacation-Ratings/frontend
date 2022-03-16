import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from "redux";
import themeSlice from "./themeSlice.js";
import authSlice from './authSlice.js';
// import handleCarousel from "./redux/reducer";
import App from '../App';

const reducers = combineReducers({
  auth: authSlice.reducer,
  theme: themeSlice.reducer,
});

const store = configureStore({
  reducer: reducers
})

// const store = createStore(handleCarousel);

// import { setIncrease, setDecrease } from "../store/carouselActions";

// const next = () => dispatch(setIncrease(position + 1));
// const prev = () => dispatch(setDecrease(position - 1));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  rootElement
);

export default store;
