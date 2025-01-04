import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate from react-router-dom
import Layout from '../../components/Layout/Layout';
import './cart.css'; // Assuming you have a CSS file for the cart styles

const Cart = () => {
  const navigate = useNavigate();  // Initializing useNavigate hook
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [pinCodeValid, setPinCodeValid] = useState(null); // for displaying validation status
  const [cartEmpty, setCartEmpty] = useState(false); // Track if the cart is empty

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Handle quantity change (increase or decrease)
  const handleQuantityChange = (index, operation) => {
    const newCart = [...cart];
    if (operation === 'increase') {
      newCart[index].quantity += 1;
    } else if (operation === 'decrease') {
      if (newCart[index].quantity === 1) {
        handleRemoveProduct(index); // Remove item if quantity goes to zero
      } else {
        newCart[index].quantity -= 1;
      }
    }
    setCart(newCart);
  };

  // Remove product from cart
  const handleRemoveProduct = (index) => {
    const newCart = cart.filter((_, idx) => idx !== index);
    setCart(newCart);

    // If cart becomes empty, display the "Your cart is empty" message
    if (newCart.length === 0) {
      setCartEmpty(true);
    }
  };

  // Apply coupon
  const handleApplyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(10); // 10% discount
    } else {
      alert('Invalid coupon');
    }
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const subtotal = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    const discountAmount = (subtotal * discount) / 100;
    return subtotal - discountAmount;
  };

  // Calculate total cart value (without discount)
  const calculateTotalCartValue = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Handle pin code validation
  const handlePinCodeCheck = () => {
    const validPinCodes = ['1900001', '190014', '190002']; // example valid pin codes
    if (validPinCodes.includes(pinCode)) {
      setPinCodeValid(true);
    } else {
      setPinCodeValid(false);
    }
  };

  // Navigate back to the homepage
  const handleBackToHome = () => {
    navigate('/');  // This will navigate the user back to the home page
  };

  // Navigate to the Wishlist Page (Assuming you have a route for wishlist)
  const handleGoToWishlist = () => {
    navigate('/wishlist');  // This will navigate the user to the wishlist page
  };

  return (
    <Layout>
      <div className="cart">
        <h2>Your Cart</h2>

        {/* Show message when the cart is empty */}
        {cartEmpty ? (
          <div>
            <p className="empty-cart-message">Your cart is empty</p>
            <p>Why not add some items from your wishlist?</p>
            <button className="back-to-home" onClick={handleBackToHome}>Back to Home</button>
            {/* Button to navigate to the wishlist */}
            <button className="go-to-wishlist" onClick={handleGoToWishlist}>Add Items from Wishlist</button>
          </div>
        ) : (
          <>
            {/* Show All Products in Cart */}
            {cart.map((product, index) => (
              <div key={index} className="cart-product-item">
                <img src={`/images/${product.image}`} alt={product.name} />
                <div className="cart-product-details">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Size: {product.size}</p>
                  <p>Color: {product.color}</p>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleQuantityChange(index, 'decrease')}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleQuantityChange(index, 'increase')}>+</button>
                  </div>
                  <p>Price: ${product.price}</p>
                  <button className="remove-button" onClick={() => handleRemoveProduct(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Price and Discount Details */}
            <div className="price-details">
              <h3>Price Details</h3>
              <p>Subtotal: ${calculateTotalCartValue().toFixed(2)}</p>
              <p>Discount: {discount}%</p>
              <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
            </div>

            {/* Coupon Section */}
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>

            {/* Pin Code Section */}
            <div className="pin-code-section">
              <input
                type="text"
                placeholder="Enter pin code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
              <button onClick={handlePinCodeCheck}>Check Pin Code</button>
              {pinCodeValid === null ? null : pinCodeValid ? (
                <p className="valid-pin">Pin Code is valid!</p>
              ) : (
                <p className="invalid-pin">Invalid Pin Code!</p>
              )}
            </div>

            {/* Cart Value at the Right Bottom */}
            <div className="cart-total-value">
              <p>Total Cart Value: ${calculateTotalCartValue().toFixed(2)}</p>
            </div>

            {/* Place Order Button */}
            <div className="action-buttons">
              <button onClick={() => alert('Proceeding to checkout')}>Place Order</button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
