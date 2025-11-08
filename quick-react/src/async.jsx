// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// function ContinueButton() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleContinue = async () => {
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       const response = await fetch('/api/save-progress', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userId: 'user123', // Replace with actual user ID
//           step: 'trader-selection',
//           data: {
//             selectedTrader: 'trader1',
//             timestamp: new Date().toISOString()
//           }
//         })
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to save');
//       }
      
//       const result = await response.json();
//       console.log('Saved:', result);
      
//       // Navigate to next page
//       navigate('/gym-choice');
      
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Failed to continue. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button 
//         onClick={handleContinue}
//         disabled={isLoading}
//         className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
//       >
//         {isLoading ? 'Saving...' : 'Continue'}
//       </button>
      
//       {error && (
//         <p className="text-red-500 mt-2">{error}</p>
//       )}
//     </div>
//   );
// }

export default function ContinueButton() {
  const navigate = useNavigate()
  
  const handleContinue = () => {
    navigate('/gym-choice');
  };

  return (
    <div>
      <button 
        onClick={handleContinue}
      >
        Next
      </button>
    </div>
  );
}