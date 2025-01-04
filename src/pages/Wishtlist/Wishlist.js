import React, { useState, useEffect } from 'react';
import './Wishlist.css'; // You can style this file
import Layout from '../../components/Layout/Layout';

const Wishlist = () => {
  // Load the wishlist from localStorage (if available) or use an empty array
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist'));
    return savedWishlist || [];
  });

  // Function to remove an item from the wishlist
  const removeFromWishlist = (item) => {
    const updatedWishlist = wishlist.filter((wishItem) => wishItem.name !== item.name);
    setWishlist(updatedWishlist);
    // Update the wishlist in localStorage
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <Layout>
      <div className="wishlist-page">
        <h1>Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty. Start adding items!</p>
        ) : (
          <div className="wishlist-items">
            {wishlist.map((item, index) => (
              <div key={index} className="wishlist-item">
                <img
                  src={`/images/${item.img}`} // Assuming the images are in the public/images folder
                  alt={item.name}
                  className="wishlist-item-image"
                />
                <div className="wishlist-item-info">
                  <p>{item.name}</p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromWishlist(item)}
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
