import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Search from './components/Search.jsx';
import AddReview from './components/AddReview.jsx';
// import StarRating from '../src/components/Ratings/index.js'

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/addreview" element={<AddReview />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
