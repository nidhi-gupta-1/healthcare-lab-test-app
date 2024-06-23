import { createContext, useState } from 'react';

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(0);

  return (
    <NavContext.Provider value={{ cartItem, setCartItem, quantity, setQuantity }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavProvider, NavContext };