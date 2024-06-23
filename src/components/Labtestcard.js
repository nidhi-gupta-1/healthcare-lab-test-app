import React from 'react';
import { NavContext } from '../Context';

const LabTestCard = ({ test }) => {
    const { cartItem, setCartItem, setQuantity } = React.useContext(NavContext);
 
    const handleBookNow = () => {
        let finalItems = cartItem;
        let existingItem = finalItems.length > 0 && finalItems.find((ele) => ele.id === test.id);
        if(existingItem){
            existingItem.quantity++;
        } else {
            const newItem = {
                id: test.id,
                name: test.name,
                price: test.price,
                quantity: 1,
              };
              finalItems = [...finalItems,newItem]
        }
        setQuantity(prevCount => prevCount + 1);
        setCartItem(finalItems);
      };

  return (
    <div className="bg-white shadow-md rounded px-4 py-6">
      <h2 className="text-lg font-bold">{test.name}</h2>
      <p className="text-gray-600">{test.description}</p>
      <p className="text-gray-600">Price: ${test.price}</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={handleBookNow}>
        Book Now
      </button>
    </div>
  );
};

export default LabTestCard;