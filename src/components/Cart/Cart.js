import React, { useEffect, useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AuthContext } from '../Context/ContextProvider';
import './Cart.css';

const Cart = ({ onClose }) => {
  const authCtx = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  const removeSpecialCharacters = (text) => {
    return text.replace(/[@.]/g, '');
  };

  const userEmail = localStorage.getItem('user-email');

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        if (authCtx.isLoggedIn) {
          const updatedUserEmail = removeSpecialCharacters(userEmail);
          const response = await fetch(`https://crudcrud.com/api/3b86df1aadfc4e938dc2d538d26307b7/cart${updatedUserEmail}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch cart data. Status: ${response.status}`);
          }
  
          const data = await response.json();
          if (data) {
            if (Array.isArray(data) && data.length > 0) {
              console.log('Fetched cart data:', data);
              setCart(data);
            } else {
              console.log('No cart data found.');
              setCart([]);
            }
          }
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error('Error fetching cart:', error.message);
      }
    };
  
    fetchCartData();
  }, [authCtx.isLoggedIn, userEmail]);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    console.log("Purchase clicked!");
  };

  return (
    <Modal show={true} onHide={onClose} className="cart-modal">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart && cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl[0]} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
        <div className="cart-total">
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handlePurchase}>
          Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
