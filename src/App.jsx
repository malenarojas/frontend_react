import './App.css';

import Navbar from './components/Navbar.jsx';
import Century21Dashboard from './pages/Home.jsx';
import AppRoutes from './Routes';

function App() {
  return (
    <div>
      <Navbar /> 
      <AppRoutes />
      <Century21Dashboard />
      <div className="bg-blue-500 text-white p-4 rounded">Probando Tailwind</div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;

