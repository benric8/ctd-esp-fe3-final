import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import { NavLink } from 'react-router';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav
      className={`w-full px-4 py-3 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } shadow-md`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <h1 className="text-lg font-bold">DH ODONTO</h1>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/home"
            className="text-sm font-semibold hover:text-blue-500 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/favoritos"
            className="text-sm font-semibold hover:text-blue-500 transition-colors"
          >
            Favoritos
          </NavLink>
          <NavLink
            to="/contactenos"
            className="text-sm font-semibold hover:text-blue-500 transition-colors"
          >
            Contáctenos
          </NavLink>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm 
            border-gray-300 dark:border-gray-700 
            hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
