import './App.css';
import { Provider } from 'react-redux';
import store from './store/index.js';

import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <Footer /> 
    </Provider>
  );
}

export default App;
