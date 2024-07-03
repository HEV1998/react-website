import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



function Units() {
  // Sample data, replace with actual data fetching
  const units = [
    { id: 1, name: 'Alpha Legion Tactical Squad', description: 'The backbone of the Alpha Legion forces.' },
    { id: 2, name: 'Lernaean Terminator Squad ', description: 'Elite warriors in heavy armor.' },
    { id: 3, name: 'Headhunter Kill Team', description: 'Stealthy operatives specializing in assassination.' },
    { id: 4, name: 'Effrit Stealth Squad ', description: 'an elite unit geared specifically to rapidly inflicting targeted casualties behind enemy lines, known variably as the Headhunters or "Effrit' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Alpha Legion Units</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {units.map(unit => (
          <div key={unit.id} className="bg-gray-800 text-white p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">{unit.name}</h2>
            <p className="mb-2">{unit.description}</p>
            <Link to={`/units/${unit.id}`} className="text-blue-500 hover:text-blue-300">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Units;
