import React from 'react';
import './App.css';

import Navigation from './components/common/Nav/Navigation';
import Header from './components/common/Header/Header';
import Code from './components/developer-side/Content/Code';
import About from './components/developer-side/About/About';
import Contact from './components/developer-side/Contact/Contact';
import Footer from './components/common/Footer/Footer';


function App() {


  return (
    <div className="App">
      <Navigation />
      <Header />
      <Code />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
