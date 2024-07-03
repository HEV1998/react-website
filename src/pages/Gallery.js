import React, { useState } from 'react';
import '../App.css';
import img1 from '../asessts/9b2463717b2bc22a9f81cb8bfc91d208.jpg';
import img2 from '../asessts/240px-Alpha_LegionPH.jpg';
import img3 from '../asessts/250px-Unsung.jpg';
import img4 from '../asessts/download.jpg'; 
import img5 from '../asessts/d9o4udc-c99d3f83-eb7a-4385-afea-d573f598af43.jpg';
import img6 from '../asessts/tumblr_d17dab353dc810bb231953013555e1e9_236cb688_1280.jpg';

function Gallery() {
  // Array of image paths
  const images = [img1, img2, img3, img4,img5,img6];
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next button click
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous button click
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="flex justify-center items-center">
        <button onClick={prevImage} className="mr-4">Previous</button>
        <img src={images[currentIndex]} alt="Gallery" className="max-w-full h-auto" />
        <button onClick={nextImage} className="ml-4">Next</button>
      </div>
    </div>
  );
}

export default Gallery;
