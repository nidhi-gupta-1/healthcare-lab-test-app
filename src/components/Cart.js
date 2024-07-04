import React from "react";
import { NavContext } from "../Context";
import Navbar from "./Navbar";
import { cloneDeep } from "lodash";

function Cart() {
  const { cartItem, setCartItem, setQuantity, quantity } =
    React.useContext(NavContext);

  const subtotal = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setCartItem([]);
    setQuantity(0);
    alert("Order Placed Successfully");
  };

  const handleRemove = (id) => {
    setQuantity((prevCount) => prevCount - 1);
    let finalItems = cloneDeep(cartItem);
    let existingItem = finalItems.find((ele) => ele.id === id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
    } else {
      finalItems = finalItems.filter((ele) => ele.id !== id);
    }
    setCartItem(finalItems);
  };

  const handleAdd = (test) => {
    setQuantity((prevCount) => prevCount + 1);
    let finalItems = cloneDeep(cartItem);
    let existingItem = finalItems.find((ele) => ele.id === test.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = {
        id: test.id,
        name: test.name,
        price: test.price,
        quantity: 1,
      };
      finalItems = [...finalItems, newItem];
    }
    setCartItem(finalItems);
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar {...{ title: "Shopping Cart", isCart: false }} />
      <ul className="list-none mb-4">
        {cartItem.length > 0 &&
          cartItem.map((item) => (
            <li key={item.id} className="flex justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={`https://via.placeholder.com/50x50`}
                  alt={item.name}
                  className="w-12 h-12 mr-4"
                />
                <span className="text-lg">{item.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg">${item.price}</span>
                <div className="ml-2 mr-2 bg-gray-200">
                  <button
                    className="border-2 border-gray-300 w-6 rounded bg-gray-100"
                    onClick={() => handleRemove(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg mx-2">{item.quantity}</span>
                  <button
                    className="border-2 border-gray-300 w-6 rounded bg-gray-100"
                    onClick={() => handleAdd(item)}
                    disabled={quantity === 5}
                  >
                    +
                  </button>
                </div>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Remove
                </button>
              </div>
            </li>
          ))}
      </ul>
      <div className="flex justify-between mb-4">
        <span className="text-lg">Subtotal:</span>
        <span className="text-lg">${subtotal.toFixed(2)}</span>
      </div>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
        disabled={cartItem.length === 0}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
