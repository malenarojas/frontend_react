import './App.css';
import Counter from './Counter.jsx';
import AgentsList from './features/agents/AgenteList.jsx';
import { useTheme } from './theme-context.jsx';

import PropiedadList from './features/propiedades/PropiedadList.jsx';

function ThemeToggle(){
    const { dark, toggle } = useTheme();
     return (
    <div style={{ background: dark ? '#333' : '#eee', color: dark ? '#eee' : '#000' }}>
      <p>Modo actual: {dark ? 'Oscuro' : 'Claro'}</p>
      <button onClick={toggle}>Cambiar Tema</button>
    </div>
  );
}

function App() {

  return (
  
         <div style={{ padding: '2rem' }}>
      <h2>Ejemplo Zustand – Contador Global</h2>
      <Counter />
      <PropiedadList/>
      <AgentsList/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>  
  )
}
export default App
