import React from 'react';
import LabTestList from './components/Labtestlist';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavProvider } from './Context';

const App = () => {
  return (
    <div className="w-full h-full bg-cover bg-center bg-no-repeat md:h-screen bg-hero">
      <NavProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<LabTestList/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </NavProvider>
    </div>
  );
};

export default App;