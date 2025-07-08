import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-6 py-4">
      <div className="text-2xl font-bold">
        <Link to="/" className="text-yellow-500">CENTURY 21</Link> Bolivia
      </div>
      <div className="flex space-x-6">
        <Link to="/propiedades" className="hover:text-yellow-500">Encuentra una propiedad</Link>
        <Link to="/unete" className="hover:text-yellow-500">Únete a C21</Link>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-yellow-500">FB</a>
        <a href="#" className="hover:text-yellow-500">IG</a>
        <a href="#" className="hover:text-yellow-500">IN</a>
        <a href="#" className="hover:text-yellow-500">TT</a>
        <select className="bg-black text-white border border-white px-2 py-1">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;