export default function ImageWithTintedText({ imageUrl, text, tintColor = 'rgba(0, 0, 255, 0.3)' }) { // Default tint to a semi-transparent blue
  return (
    <div style={{ 
        position: 'relative', 
        width: '500px', // Example width
        height: '300px', // Example height
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
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker background for text readability
        padding: '15px 25px',
        fontSize: '28px',
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 3 // Ensure text is above both image and tint
      }}>
        {text}
      </div>
    </div>
  );
}