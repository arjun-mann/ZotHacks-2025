import React from 'react';
import { motion } from 'framer-motion';

export default function GymOption({ imageUrl, text, tintColor = 'rgba(255, 255, 255, 0.3)' }) {
  const hoverTransition = {duration: 0.3, ease: "easeInOut"}
  return (
    <motion.div 
      whileHover = {{scale: 1.05}}
      transition = {hoverTransition}
    >
      <div style={{ 
          position: 'relative', 
          width: '100%', // Example width
          height: '100%', // Example height
          overflow: 'hidden',
          display: 'flex',       // Use flexbox to easily center content
          alignItems: 'center',  // Center vertically
          justifyContent: 'center' // Center horizontally
      }}>
        
        {/* The base image, positioned to fill the container */}
        <img 
          src={imageUrl} 
          alt="Background" 
          style={{ 
            position: 'absolute', // Position absolute to fill, but behind overlay
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            zIndex: 1 // Ensure image is behind the overlay but above other content if necessary
          }}
        />
        
        {/* The tint overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: tintColor, // Apply the tint color here
          zIndex: 2 // Ensure tint is above the image
        }}></div>

        {/* The superimposed text */}
        <div style={{
          position: 'relative', // Relative position makes it stack correctly with zIndex
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          padding: '15px 25px',
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center',
          zIndex: 3, // Ensure text is above both image and tint
          width: '90%'
        }}>
          {text}
        </div>
      </div>
    </motion.div>
  );
}