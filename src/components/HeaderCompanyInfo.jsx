const HeaderCompanyInfo = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Logo a la izquierda */}
      <img
        src="/public/assets/logoSGD.svg"
        alt="Logo"
        className="w-40 h-40 object-contain"
      />

      {/* Información en el centro */}
      <div className="text-center md:text-left flex-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">CENTURY 21 Norte</h1>
        <p className="text-gray-800">Calle Dr. Jaime Román #402, Equipetrol, Santa Cruz</p>
        <p className="text-gray-800">Teléfono: <span className="font-semibold">69418068</span> | Whatsapp: <span className="font-semibold">71352445</span></p>
        <p className="text-gray-800">
          Email: <a href="mailto:norte@century21.bo" className="text-blue-600 underline">norte@century21.bo</a> |
          Sitio web: <a href="https://c21.com.bo" className="text-blue-600 underline" target="_blank" rel="noreferrer">c21.com.bo</a>
        </p>
        <p className="text-gray-800">Horario: 8:30 a 12:30 | 14:30 a 18:30</p>
      </div>

      {/* Imagen de oficina a la derecha */}
      <img
        src="/public/assets/imagen.svg"
        alt="Oficina"
        className="w-56 h-40 object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default HeaderCompanyInfo;

