"use client"

import React, {useEffect, useState, useRef } from 'react';
import './ApartmentCarousel.css'

function ImageCarousel({images, imageHeight}) {

  if (!images) {
    return (
      <p>loading...</p>
    )
  }

  return (
    <div className='imageContainer'>
      <img className='image' src={images[0]}/>
    </div>
  );
}

export default ImageCarousel;
