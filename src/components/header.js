import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Alpha Legion</Link>
        </div>
        <nav>
          <Link to="/" className="mx-2 hover:text-gray-400">Home</Link>
          <Link to="/history" className="mx-2 hover:text-gray-400">History</Link>
          <Link to="/units" className="mx-2 hover:text-gray-400">Units</Link>
          <Link to="/gallery" className="mx-2 hover:text-gray-400">Gallery</Link>
          <Link to="/currentstatus" className="mx-2 hover:text-gray-400">Current Status</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
