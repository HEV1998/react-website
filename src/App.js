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
import CurrentStatus from './pages/Currentstatus';
import Gallery from './pages/Gallery';
import NotableMembers from './components/NotableMembers';
import MemberDetails from './components/MemberDetails';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/units" element={<Units />} />
            <Route path="/units/:id" element={<UnitDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/currentstatus" element={<CurrentStatus />} />
            <Route path="/members" element={<NotableMembers />} />
            <Route path="/members/:id" element={<MemberDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

