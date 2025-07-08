import { useFetchAgentes } from '../../hooks/useFecthAgents.js';

function AgentsList() {
  const { agentes, loading } = useFetchAgentes();
   console.log("estos son los agentes en la vista",agentes)
  if (loading) return <p>Cargando Agentes...</p>;

  return (
    <div>
      <h2>Lista de Agentes</h2>
          <ul className="space-y-4">
      {agentes.map((agente) => (
        <li key={agente.id} className="border p-4 rounded shadow">
           <img
            src={agente.foto}
            className="w-16 h-16 object-cover rounded-full border"
          />
          <p className="font-bold text-lg">{agente.nombre}</p>
          <p className="text-sm text-gray-600">{agente.correo}</p>
          <p className="text-sm text-gray-600">{agente.telefono}</p>
        </li>
      ))}
    </ul>

    </div>
  );
}

export default AgentsList;