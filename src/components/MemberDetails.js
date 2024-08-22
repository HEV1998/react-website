import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`/api/members/${id}`)  // Changed to a relative URL
      .then(response => {
        setMember(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, [id]);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{member.name}</h1>
      <p className="text-lg mb-4">{member.rank}</p>
      <p className="text-lg mb-4">{member.description}</p>
      <p>{member.details}</p>
    </div>
  );
}

export default MemberDetails;
