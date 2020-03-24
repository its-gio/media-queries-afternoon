import React from 'react';
import SmoothScroll from 'smooth-scroll'
import './App.scss';
import Header from './components/Hero/Header';
import Hero from './components/Hero/Hero';
import Service from './components/Service';
import Portfolio from './components/Portfolio/Portfolio';

new SmoothScroll('a[href*="#"]');

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Portfolio />
    </div>
  );
}

export default App;