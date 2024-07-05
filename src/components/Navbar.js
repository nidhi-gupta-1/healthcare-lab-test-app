import React from "react";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../Context";
import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/solid";

const Navbar = ({ title, isCart }) => {
  const { quantity } = React.useContext(NavContext);
  const history = useNavigate();

  const handleCartClick = () => {
    history("/cart", { replace: true });
  };

  const handleHomeClick = () => {
    history("/", { replace: true });
  };

  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
      <ul className="flex items-center">
        {isCart ? (
          <li>
            <button className="relative" onClick={handleCartClick}>
              <ShoppingCartIcon className="w-8 h-8 text-gray-800"/>
              <span className="absolute top-0 right-0 w-5 h-5 font-semibold bg-red-500 text-white rounded-full flex justify-center items-center">
                {quantity}
              </span>
            </button>
          </li>
        ) : (
          <li>
            <button
              className="inline-flex items-center rounded text-gray-800 cursor-pointer"
              onClick={handleHomeClick}
            >
              {/* <span className="text-2xl font-semibold">Home</span> */}
              <HomeIcon className="w-8 h-8" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
