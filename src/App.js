// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import History from './pages/History';
import Units from './pages/Units';
import UnitDetails from './components/UnitDetails';
import Currentstatus from './pages/Currentstatus';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path="/Units" element={<Units />} />
            <Route path="/units/:id" element={<UnitDetails />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Currentstatus" element={<Currentstatus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
