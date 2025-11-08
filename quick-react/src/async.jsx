// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// export default function ContinueButton({age, weight, height}) {
//   const navigate = useNavigate();
  
//   const handleContinue = () => {
//     // Just log the data for now
//     console.log('Age:', age, 'Weight:', weight, 'Height:', height);
    
//     // Navigate to next page
//     navigate('/gym-choice');
//   };



// must have backend setup already or else it wont fetch
export default function ContinueButton({age, weight, height}) {
  const navigate = useNavigate()
  
  const handleContinue = async() => {
    try{
      const response = await fetch('/api/save-bio', {
        method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            weight: weight,
            height: height,
            age: age,
          
          
            timestamp: new Date().toISOString()
        })
      });
    if (response.ok) {
        const data = await response.json();
        console.log('Saved:', data);
        navigate('/gym-choice');
      } else {
        console.error('Failed to save');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button 
        onClick={handleContinue}
         className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Continue
      </button>
    </div>
  );
}
