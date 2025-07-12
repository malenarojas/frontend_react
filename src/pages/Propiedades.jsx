import CardPropiedad from "../components/PropiedadCard";

const propiedades = [
  {
    id: 1,
    titulo: "Casa en Venta en Urbanización Tupá Rueté",
    direccion: "9NO ANILLO, Este, Santa Cruz",
    precio: "74.425 USD",
    terreno: "202 m²",
    construccion: "130 m²",
    img: "/assets/propiedad1.jpg",
    habitaciones: 3,
    banos: 2,
    parqueos: 1,
    mascotas: true,
  },
  // ...otras propiedades
];

const Propiedades = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Propiedades en Venta</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {propiedades.map((propiedad) => (
          <CardPropiedad key={propiedad.id} {...propiedad} />
        ))}
      </div>
    </div>
  );
};

export default Propiedades;
