
import './App.css';
import { useState, useEffect } from 'react';
import { CustomNavBar, NavBar, Navbar } from  './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

  const App = () => {
  return (
    <div className="App">
      <CustomNavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
