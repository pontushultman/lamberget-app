import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';

import Header from './components/Header';
import { Services } from './pages/Services';
import { Footer } from './components/Footer';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Home title={"Meny"}></Home>
        <Footer></Footer>
    </div>
  );
}

export default App;
