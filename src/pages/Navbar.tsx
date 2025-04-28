import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/projects", label: "Proyectos" },
    { to: "/aboutme", label: "Quién soy" },
  ];

  return (
    <nav className="bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-lime-600">Mi Portafolio</h1>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-lime-600"
                  : "text-gray-400 hover:text-lime-500"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
