import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Soft from './components/Soft';
import Hard from './components/Hard';
import Contact from './components/Contact';
import Gallery from './components/Gallery';



function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/soft" element={<Soft />}/>
      <Route path="/hard" element={<Hard />}/>
      <Route path="/contact" element={<Contact />}/>
      
      
    </Routes>
    </React.Fragment>
  );
}

export default App;
