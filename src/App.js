import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import StarRating from '../src/components/Ratings/index.js'
import store from './store/index.js';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Search from './components/Search.jsx';
import Favorites from './components/Favorites.jsx';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
