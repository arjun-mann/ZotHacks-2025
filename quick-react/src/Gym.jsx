import GymOption from './GymOption.jsx'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Gym(){
    const location = useLocation();
    const navigate = useNavigate();
    const prevData = location.state;      // { age, weight, height, sex, goal, selectedDays }
    
    const handleSelectGym = async (gymName) => {
        const fullData = { ...prevData, gym: gymName };

        const response = await fetch("http://localhost:8000/exercises", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fullData),
        });

        const result = await response.json();
        if (result.status === "success") {
            navigate("/workout", { state: { workoutPlan: result.workout_plan } });
        } else {
            alert(result.message || "Error fetching workout plan");
        }
    }

    return(
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            width: "100%",
            padding: "20px"}}>
            <GymOption
                imageUrl="/src/assets/images/arc.jpg"
                text='Anteater Recreation Center'
                tintColor='rgba(84, 20, 20, 0.4)'
                onClick={() => handleSelectGym('Anteater Recreation Center')}
            />
            <GymOption
                imageUrl="/src/assets/images/mesa_court.jpg"
                text='Mesa Court'
                tintColor='rgba(40, 26, 93, 0.4)'
                onClick={() => handleSelectGym('Mesa Court')}
            />
            <GymOption
                imageUrl="/src/assets/images/me_gym.jpg"
                text='Middle Earth'
                tintColor='rgba(8, 53, 10, 0.4)'
                onClick={() => handleSelectGym('Middle Earth')}
            />
            <GymOption
                imageUrl="/src/assets/images/pv.jpg"
                text='Plaza Verde'
                tintColor='rgba(71, 63, 13, 0.4)'
                onClick={() => handleSelectGym('Plaza Verde')}
            />
            <GymOption
                imageUrl="/src/assets/images/vdc.jpg"
                text='Vista de Campo'
                tintColor='rgba(72, 14, 69, 0.4)'
                onClick={() => handleSelectGym('Vista de Campo')}
            />
            <GymOption
                imageUrl="/src/assets/images/vdcn.jpg"
                text='Vista de Campo Norte'
                tintColor='rgba(17, 81, 87, 0.4)'
                onClick={() => handleSelectGym('Vista de Campo Norte')}
            />
        </div>
    );
}