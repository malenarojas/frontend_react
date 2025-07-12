import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1a1a1a] text-white flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-md">
      {/* Logo y texto */}
      <div className="flex items-center space-x-2 text-2xl font-bold text-yellow-500">
        <span className="text-3xl font-extrabold">CENTURY 21.</span>
        <span className="text-sm text-gray-400">Bolivia</span>
      </div>

      {/* Enlaces de navegación */}
      <div className="flex flex-col md:flex-row md:space-x-10 text-sm mt-4 md:mt-0 text-white font-semibold uppercase tracking-wide">
        <Link to="/propiedades" className="hover:text-yellow-500 transition">Encuentre una propiedad</Link>
        <Link to="/agentes" className="hover:text-yellow-500 transition">Únete a C21</Link>
      </div>

      {/* Redes sociales e idioma */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
        <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
        <a href="#" className="hover:text-yellow-500"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-yellow-500"><FaTiktok /></a>
        <select className="bg-[#1a1a1a] border border-white text-white px-2 py-1 text-sm rounded hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
