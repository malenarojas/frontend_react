
const departamentos = [
  'BENI', 'CHUQUISACA', 'COCHABAMBA', 'POTOSI', 'SANTA CRUZ', 'LA PAZ', 'ORURO', 'TARIJA'
];

const paises = [
  'Century 21 Argentina', 'Century 21 Bolivia', 'Century 21 Brasil', 'Century 21 Chile', 'Century 21 Colombia',
  'Century 21 Ecuador', 'Century 21 Guyana', 'Century 21 México', 'Century 21 Paraguay', 'Century 21 Perú',
  'Century 21 Uruguay', 'Century 21 Venezuela'
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-3xl font-bold text-yellow-500">CENTURY 21</div>
            <div className="text-lg">Bolivia</div>
          </div>

          <div className="flex space-x-16">
            <div>
              <h4 className="font-semibold mb-2">NOSOTROS</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-500">Aviso de Privacidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">EXPLORA</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-yellow-500">Propiedad en venta</a></li>
                <li><a href="#" className="hover:text-yellow-500">Propiedad en alquiler</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="mb-2 font-semibold">ENCUENTRA TU PROPIEDAD EN</h4>
          <div className="flex flex-wrap gap-4">
            {departamentos.map((dpto, index) => (
              <span key={index} className="hover:text-yellow-500 cursor-pointer">{dpto}</span>
            ))}
          </div>
        </div>

        <div className="mt-6 text-sm">
          {paises.join(' | ')}
        </div>

        <div className="mt-6 text-xs text-gray-400">
          Cada Oficina es de Propiedad y Operación Independiente... (Texto legal)
        </div>

        <div className="mt-4 text-4xl text-yellow-500 font-bold">21</div>
      </div>
    </footer>
  );
};

export default Footer;
