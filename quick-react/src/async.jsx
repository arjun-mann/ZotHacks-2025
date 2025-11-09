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
export default function ContinueButton({age, weight, height, selectedDays, goal}) {
  const navigate = useNavigate()
  
  const handleContinue = async() => {
     const dayNames = selectedDays.map(day => day.name);
     navigate('/gym-choice');
    console.log('Sending:', {age, weight, heightselectedDays: dayNames, goal });
    try{
      const response = await fetch('http://127.0.0.1:5000/exercises', {
        method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            weight: parseFloat(weight),
            height: parseFloat(height),
            age: parseInt(age),
            sex: true, // or get from form
            gym: "UCI ARC",// get from form
            category: goal|| "General Workout", // get from goals
            available_days: dayNames,
            exercise_days: 3 // or get from form
       
        })
      });

      
    if (response.ok) {
        const data = await response.json();
        console.log('Server response:', data);
        navigate('/gym-choice');
      } else {
        const errorText = await response.text();
        console.error('Failed to save. Status:', response.status);
        console.error('Error:', errorText);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
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
