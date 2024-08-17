import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home-container">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Alpha Legion Fan Site</h1>
        <p className="text-lg">Learn about the secretive and cunning Alpha Legion, one of the most enigmatic Space Marine Legions in Warhammer 40k.</p>
      </section>
      <section className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-800 text-white p-4 rounded">
          <h3 className="home-title"> <Link to="/history" style={{ color: 'inherit', textDecoration: 'none' }}>History</Link></h3>
            <p>Discover the rich history of the Alpha Legion and its pivotal role in the galaxy's conflicts.</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded">
            <h4 className="home-title"> <Link to="/Units" style={{ color: 'inherit', textDecoration: 'none' }}>Units</Link></h4>
            <p>Explore the various units that make up the Alpha Legion, from tactical squads to elite terminators.</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded">
            <h5 className="home-title"> <Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link></h5>
            <p>View stunning images and artwork of the Alpha Legion, showcasing their iconic armor and battle scenes.</p>
            <div className="bg-gray-800 text-white p-4 rounded">
                <h6 className="home-title"> <Link to="/Currentstatus" style={{ color: 'inherit', textDecoration: 'none' }}>Current status</Link></h6>
                <p>Learn about the current state of the Alpha Legion and their ongoing battles in the Warhammer 40k universe.</p>
            </div>
            <div className="bg-gray-800 text-white p-4 rounded">
                <h7 className="home-title"> <Link to="/members" style={{ color: 'inherit', textDecoration: 'none' }}>Notable Members</Link></h7>
                <p>Meet some of the most famous and infamous members of the Alpha Legion, from leaders to legendary warriors.</p>
          </div>
        </div>
        </div>
      </section>
    </div>
    
  );
}

export default Home;

  