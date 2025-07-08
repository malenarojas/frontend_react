import { useFetchPropiedades } from '../../hooks/useFecthPropiedades';
import PropiedadCard from './PropiedadCard';


function ProductList() {
  const { propiedades, loading } = useFetchPropiedades();

  if (loading) return <p>Cargando propiedades...</p>;

  return (
    <div>
      <h2>Lista de propiedades</h2>
       <ul className="space-y-4">
         {propiedades.map((p) => (
          <li key={p.id}>
            <PropiedadCard propiedad={p} />
          </li>
        ))}
       </ul>

    </div>
  );
}

export default ProductList;
