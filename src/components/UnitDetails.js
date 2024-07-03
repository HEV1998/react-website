import React from 'react';
import { useParams } from 'react-router-dom';
import unit1Image from '../asessts/240px-Alpha_LegionPH.jpg';
import unit2Image from '../asessts/download.jpg';
import unit3Image from '../asessts/d9o4udc-c99d3f83-eb7a-4385-afea-d573f598af43.jpg';
import unit4Image from '../asessts/9b2463717b2bc22a9f81cb8bfc91d208.jpg';


// Sample detailed data, replace with actual data fetching
const unitDetails = {
  1: {
    name: 'Alpha Legion Tactical Squad',
    description: 'The backbone of the Alpha Legion forces.',
    details: 'Tactical Squads are versatile and form the core of the Alpha Legion. They are equipped with a variety of weapons to handle any situation.',
    image: unit1Image,

  },
  2: {
    name: 'Lernaean Terminator Squad',
    description: 'Elite warriors in heavy armor.',
    details: 'The Lernaean Terminator Squad are the Alpha Legion\'s most elite warriors, equipped with the best armor and weaponry.',
    image: unit2Image,
  },
  3: {
    name: 'Headhunter Kill Team',
    description: 'Stealthy operatives specializing in assassination.',
    details: 'The Headhunter Kill Team is specialized in covert operations, taking out key targets with precision and stealth.',
    image: unit3Image,
  },
  4: {
    name: 'Effrit Stealth Squad',
    description: 'An elite unit geared specifically to rapidly inflicting targeted casualties behind enemy lines, known variably as the Headhunters or "Effrit"',
    details: 'Effrit Stealth Squad is known for their rapid and targeted attacks, causing havoc behind enemy lines with unmatched efficiency.',
    image: unit4Image,
  },
};

function UnitDetails() {
  const { id } = useParams();
  const unit = unitDetails[id];

  if (!unit) {
    return <div>Unit not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{unit.name}</h1>
      <p className="text-lg mb-4">{unit.description}</p>
      <img src={unit.image} alt={unit.name}/>
      <p>{unit.details}</p>
    </div>
  );
}

export default UnitDetails;
