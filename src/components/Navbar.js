import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavContext } from '../Context';

const Navbar = ({title, isCart}) => {
    const {quantity} = React.useContext(NavContext)
    const history = useNavigate();
  
    const handleCartClick = () => {
        history('/cart', { replace: true });
    }

    const handleHomeClick = () => {
        history('/', { replace: true });
    }

  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {title}
        </h1>
      </div>
      <ul className="flex items-center">
        {isCart ? <li>
        <button className="relative" onClick={handleCartClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white rounded-full flex justify-center items-center">
        {quantity}
      </span>
    </button>
        </li>  :  <li>
          <button className="text-gray-600 hover:text-gray-900" onClick={handleHomeClick}>
            Home
          </button>
        </li>}
      </ul>
    </nav>
  );
};

export default Navbar;