<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './MenProducts.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './MenProducts.css';
import Layout from '../../components/Layout/Layout';
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c

const Men = () => {
  // Sample categories and items with images
  const categories = [
    {
      name: 'T-Shirts',
      items: [
<<<<<<< HEAD
        { name: 'T-Shirt 1', img: 'tshirt1.jpeg' },
        { name: 'T-Shirt 2', img: 'tshirt2.jpeg' },
        { name: 'T-Shirt 3', img: 'tshirt3.jpeg' },
        { name: 'T-Shirt 4', img: 'tshirt4.jpeg' },
        { name: 'T-Shirt 5', img: 'tshirt5.jpeg' },
        { name: 'T-Shirt 6', img: 'tshirt5.jpeg' },
        { name: 'T-Shirt 7', img: 'tshirt4.jpeg' },
        { name: 'T-Shirt 8', img: 'tshirt3.jpeg' },
        { name: 'T-Shirt 9', img: 'tshirt2.jpeg' },
        { name: 'T-Shirt 10', img: 'tshirt1.jpeg' },
      ]
    },
    {
      name: 'Jeans',
      items: [
        { name: 'Jeans 1', img: 'jeans1.jpeg' },
        { name: 'Jeans 2', img: 'jeans2.webp' },
        { name: 'Jeans 3', img: 'jeans3.jpg' },
        { name: 'Jeans 4', img: 'jeans4.jpeg' },
        { name: 'Jeans 5', img: 'jeans5.webp' },
        { name: 'Jeans 6', img: 'jeans5.webp' },
        { name: 'Jeans 7', img: 'jeans4.jpeg' },
        { name: 'Jeans 8', img: 'jeans3.jpg' },
        { name: 'Jeans 9', img: 'jeans2.webp' },
        { name: 'Jeans 10', img: 'jeans1.jpeg' },
      ]
    },
    {
      name: 'Shoes',
      items: [
        { name: 'Shoes 1', img: 'shoes1.webp' },
        { name: 'Shoes 2', img: 'shoes2.webp' },
        { name: 'Shoes 3', img: 'shoes3.jpeg' },
        { name: 'Shoes 4', img: 'shoes4.webp' },
        { name: 'Shoes 5', img: 'shoes5.jpeg' },
        { name: 'Shoes 6', img: 'shoes5.jpeg' },
        { name: 'Shoes 7', img: 'shoes4.webp' },
        { name: 'Shoes 8', img: 'shoes3.jpeg' },
        { name: 'Shoes 9', img: 'shoes2.webp' },
        { name: 'Shoes 10', img: 'shoes1.webp' },
      ]
    }
=======
        { name: 'T-Shirt 1', img: 'tshirt1.jpeg', id: 1 },
        { name: 'T-Shirt 2', img: 'tshirt2.jpeg', id: 2 },
        { name: 'T-Shirt 1', img: 'tshirt1.jpeg', id: 1 },
        { name: 'T-Shirt 2', img: 'tshirt2.jpeg', id: 2 },
        { name: 'T-Shirt 1', img: 'tshirt1.jpeg', id: 1 },
        { name: 'T-Shirt 2', img: 'tshirt2.jpeg', id: 2 },
        // Add unique ids for each product
      ]
    },
    // Other categories here...
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c
  ];

  const [startIndexes, setStartIndexes] = useState(
    categories.map(() => 0) // Initially start at index 0 for each category
  );

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist'));
    return savedWishlist || [];
  });

  // Function to handle adding/removing items from the wishlist
  const toggleWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.some((wishItem) => wishItem.name === item.name);
      if (itemExists) {
        const updatedWishlist = prevWishlist.filter((wishItem) => wishItem.name !== item.name);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        return updatedWishlist;
      } else {
        const updatedWishlist = [...prevWishlist, item];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
    });
  };

  // Function to check if an item is in the wishlist
  const isInWishlist = (item) => wishlist.some((wishItem) => wishItem.name === item.name);

  // Scroll functions
  const handleScrollRight = (index) => {
    setStartIndexes((prev) => {
      const newStartIndexes = [...prev];
      if (newStartIndexes[index] + 5 < categories[index].items.length) {
        newStartIndexes[index] = newStartIndexes[index] + 5;
      }
      return newStartIndexes;
    });
  };

  const handleScrollLeft = (index) => {
    setStartIndexes((prev) => {
      const newStartIndexes = [...prev];
      if (newStartIndexes[index] - 5 >= 0) {
        newStartIndexes[index] = newStartIndexes[index] - 5;
      }
      return newStartIndexes;
    });
  };

  return (
    <Layout>
      <div className="men-page">
        <h1>Men's Clothing</h1>
<<<<<<< HEAD
        {/* <Link to="/wishlist">
          <button className="view-wishlist-button">View Wishlist</button>
        </Link> */}
=======
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c
        <div className="category-container">
          {categories.map((category, index) => (
            <div key={category.name} className="category">
              <h2>{category.name}</h2>

              {/* Scroll Button Left */}
              {startIndexes[index] > 0 && (
<<<<<<< HEAD
                <button
                  className="scroll-button left"
                  onClick={() => handleScrollLeft(index)}
                >
=======
                <button className="scroll-button left" onClick={() => handleScrollLeft(index)}>
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c
                  &lt;
                </button>
              )}

              <div className="category-items">
                {category.items
<<<<<<< HEAD
                  .slice(startIndexes[index], startIndexes[index] + 5) // Show 5 items at a time
                  .map((item, idx) => (
                    <div key={idx} className="item">
                      <img
                        src={`/images/${item.img}`} // Assuming images are in the public/images folder
                        alt={item.name}
                        className="item-image"
                      />
                      <p>{item.name}</p>
                      <button
                        className={`wishlist-button ${isInWishlist(item) ? 'in-wishlist' : ''}`}
                        onClick={() => toggleWishlist(item)}
                      >
                        {isInWishlist(item) ? (
                          <i className="bi bi-heart-fill wishlist-icon filled" />
                        ) : (
                          <i className="bi bi-heart wishlist-icon" />
                        )}
                      </button>
=======
                  .slice(startIndexes[index], startIndexes[index] + 5) // Only show 5 items at a time
                  .map((item) => (
                    <div key={item.id} className="item">
                      <Link to={`/Product1description`}> {/* Link to the product description page */}
                        <img
                          src={`/images/${item.img}`} // Use path relative to the public folder
                          alt={item.name}
                          className="item-image"
                        />
                        <p>{item.name}</p>
                      </Link>
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c
                    </div>
                  ))}
              </div>

              {/* Scroll Button Right */}
              {startIndexes[index] + 5 < category.items.length && (
<<<<<<< HEAD
                <button
                  className="scroll-button right"
                  onClick={() => handleScrollRight(index)}
                >
=======
                <button className="scroll-button right" onClick={() => handleScrollRight(index)}>
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c
                  &gt;
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Men;
