import './Gallery.css';
import React from 'react';
import imagesList from './Images';

function Gallery() {

    return (
      <>
        <div className='gallery'>
            {imagesList.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} />
            ))}
        </div>
      </>
    )
  }
  
  export default Gallery;