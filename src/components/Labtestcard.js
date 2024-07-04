import React from "react";
import { NavContext } from "../Context";
import { cloneDeep } from "lodash";
import { useNavigate } from "react-router-dom";

const LabTestCard = ({ test }) => {
  const { cartItem, setCartItem, setQuantity, quantity } =
    React.useContext(NavContext);
  const [selectQuantity, setSelectQuantity] = React.useState(1);
  const history = useNavigate();

  function* generateOptions(maxQuantity) {
    for (let num = 1; num <= maxQuantity; num++) yield num;
  }

  const options = React.useMemo(() => {
    const createOptions = (maxQuantity) => [...generateOptions(maxQuantity)];
    return createOptions(test.maxQuantity);
  }, [test.maxQuantity]);

  const handleAddToCart = (type) => {
    let finalItems = cloneDeep(cartItem);
    let existingItem =
      finalItems.length > 0 && finalItems.find((ele) => ele.id === test.id);
    if (existingItem) {
      existingItem.quantity = parseInt(existingItem.quantity) + selectQuantity;
    } else {
      const newItem = {
        id: test.id,
        name: test.name,
        price: test.price,
        quantity: selectQuantity,
      };
      finalItems = [...finalItems, newItem];
    }
    if (!existingItem || existingItem.quantity <= 5) {
      setQuantity((prevState) => prevState + selectQuantity);
      setCartItem(finalItems);
      if (type === "book") {
        history("/cart", { replace: true });
      }
    } else {
      existingItem.quantity = quantity;
      alert("Quantity for requested test is exceeded the limit of 5");
    }
  };

  const handleSelect = (e) => {
    setSelectQuantity(parseInt(e.target.value));
  };

  return (
    <div className="bg-white shadow-md rounded px-4 py-6">
      <h2 className="text-lg font-bold">{test.name}</h2>
      <p className="text-gray-600">{test.description}</p>
      <p className="text-gray-600">Price: ${test.price}</p>
      <div>
        <select
          className="border-2 border-gray-300 rounded mr-2 mb-2"
          onChange={handleSelect}
          value={selectQuantity}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4  mr-2 rounded"
            onClick={() => handleAddToCart("cart")}
          >
            Add to Cart
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAddToCart("book")}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabTestCard;
