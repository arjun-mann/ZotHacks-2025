import { Routes, Route } from 'react-router-dom';
import Intro from './Intro.jsx';
import Home from './Home.jsx';
import Gym from './Gym.jsx';
import WorkoutDisplay from "./WorkoutDisplay.jsx";


function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Intro/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/gym-choice" element={<Gym />} />
      <Route path="/workout" element={<WorkoutDisplay />} />
    </Routes>
  );
}

export default AppRoutes;