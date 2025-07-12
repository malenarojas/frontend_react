import { Route, Routes } from 'react-router-dom';
import Agentes from './pages/Agentes';
import Home from './pages/Home';
import Propiedades from './pages/Propiedades';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/propiedades" element={<Propiedades />} />
      <Route path="/agentes" element={<Agentes />} />
    </Routes>
  );
};

export default AppRoutes;
