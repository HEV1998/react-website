import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function NotableMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('/api/members')  // Changed to a relative URL
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Notable Alpha Legion Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map(member => (
          <div key={member.id} className="bg-gray-800 text-white p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
            <p className="mb-2">{member.rank}</p>
            <p className="mb-2">{member.description}</p>
            <Link to={`/members/${member.id}`} className="text-blue-500 hover:text-blue-300">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotableMembers;
