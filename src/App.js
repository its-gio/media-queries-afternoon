import React from 'react';
import './App.scss';
import Header from './components/Hero/Header';
import Hero from './components/Hero/Hero';
import Service from './components/Service';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
    </div>
  );
}

export default App;