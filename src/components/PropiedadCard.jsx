const CardPropiedad = ({ img, titulo, direccion, precio, terreno, construccion, habitaciones, banos, parqueos, mascotas }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
      <img src={img} alt={titulo} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{titulo}</h3>
        <p className="text-sm text-gray-600">{direccion}</p>
        <p className="text-yellow-600 font-bold text-lg mt-2">{precio}</p>
        <div className="mt-2 text-sm text-gray-700 space-y-1">
          <p>Terreno: {terreno} | Construcción: {construccion}</p>
          <p>Habitaciones: {habitaciones} | Baños: {banos}</p>
          <p>Parqueos: {parqueos} | Mascotas: {mascotas ? "Sí" : "No"}</p>
        </div>
        <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded">Ver Detalle</button>
      </div>
    </div>
  );
};

export default CardPropiedad;
