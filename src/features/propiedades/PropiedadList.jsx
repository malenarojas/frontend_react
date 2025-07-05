import { useFetchPropiedades } from '../../hooks/useFecthPropiedades';

function ProductList() {
  const { propiedades, loading } = useFetchPropiedades();

  if (loading) return <p>Cargando propiedades...</p>;

  return (
    <div>
      <h2>Lista de propiedades</h2>
      <ul>
        {propiedades.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
