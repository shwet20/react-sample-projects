import React from 'react';
import { useSelector } from 'react-redux';

const AddToCart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <React.Fragment>
      <div>
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div className="cart-grid">
            {cart.map((item) => (
              <div key={item.pid} className="cart-card">
                <img src={item.photo} alt={item.pame} className="cart-image"/>
                <div className="cart-details">
                  <h3>{item.pame}</h3>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AddToCart;
