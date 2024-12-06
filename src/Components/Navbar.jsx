import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import { NavLink } from 'react-router';
import { ActionTypes } from '../actions/actions';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: ActionTypes.TOGGLE_THEME });
  };

  return (
    <nav
      className={`w-full px-4 py-3  ${state.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } shadow-md`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <h1 className="text-lg font-bold">DH ODONTO</h1>


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

        <div className='ml-4'>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm 
              border-gray-300 dark:border-gray-700 
              hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {state.theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
