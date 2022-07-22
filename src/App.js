import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Home from './pages/Home';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' index element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
