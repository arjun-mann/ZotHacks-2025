import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Gym from './Gym.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gym-choice" element={<Gym />} />
    </Routes>
  );
}

export default AppRoutes;