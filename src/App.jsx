import './App.css';
import React from 'react';
import Navbar from "./components/Navbar.jsx"; 
import Home from './components/home.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <About/>
    <Service/>
    <Pricing/>
    <Footer/>
    </>
  );
}

export default App;

