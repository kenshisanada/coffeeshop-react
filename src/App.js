import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Service from './components/service';
import Menu from './components/menu';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Service />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
