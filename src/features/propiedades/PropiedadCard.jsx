// src/components/PropiedadCard.jsx
import { FaBath, FaBed, FaMapMarkerAlt, FaSwimmer } from 'react-icons/fa';

const PropiedadCard = ({ propiedad }) => {
  return (
    <div className="grid md:grid-cols-[300px_1fr] bg-[#e5e3df] rounded-lg overflow-hidden shadow-md w-full max-w-6xl">
      <div className="relative h-[200px] md:h-full">
        <img
          src={propiedad.imagen || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}
          alt={propiedad.titulo}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">Nueva en el Mercado</span>
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">1/21</span>
        <FaMapMarkerAlt className="absolute bottom-2 left-2 text-white" />
      </div>

      <div className="flex flex-col justify-between p-4">
        <div>
          <span className="text-sm text-yellow-800 font-semibold block mb-1">Departamento en venta</span>
          <h3 className="text-lg font-bold leading-snug mb-1 line-clamp-1">
            {propiedad.titulo}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {propiedad.descripcion}
          </p>

          <div className="flex flex-wrap gap-6 text-sm mb-2">
            <span><strong>{propiedad.m2_terreno} m²</strong> Terreno</span>
            <span><strong>{propiedad.m2_construccion} m²</strong> Construcción</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-1"><FaBed /> {propiedad.recamaras} Rec.</span>
            <span className="flex items-center gap-1"><FaBath /> {propiedad.banos} Baños</span>
            <span className="flex items-center gap-1"><FaSwimmer /> Alberca</span>
          </div>

          <p className="text-xl font-semibold mt-4">{Number(propiedad.precio).toLocaleString()} USD</p>
        </div>

        <div className="mt-4 text-right">
          <button className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800">
            Ver Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropiedadCard;
