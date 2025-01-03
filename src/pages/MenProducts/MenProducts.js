import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './MenProducts.css';
import Layout from '../../components/Layout/Layout';

const Men = () => {
  // Sample categories and items with images
  const categories = [
    {
      name: 'T-Shirts',
      items: [
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
  ];

  const [startIndexes, setStartIndexes] = useState(
    categories.map(() => 0) // Initially start at index 0 for each category
  );

  // Function to show more items when scrolling right
  const handleScrollRight = (index) => {
    setStartIndexes((prev) => {
      const newStartIndexes = [...prev];
      if (newStartIndexes[index] + 5 < categories[index].items.length) {
        newStartIndexes[index] = newStartIndexes[index] + 5;
      }
      return newStartIndexes;
    });
  };

  // Function to show fewer items when scrolling left
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
        <div className="category-container">
          {categories.map((category, index) => (
            <div key={category.name} className="category">
              <h2>{category.name}</h2>

              {/* Scroll Button Left */}
              {startIndexes[index] > 0 && (
                <button className="scroll-button left" onClick={() => handleScrollLeft(index)}>
                  &lt;
                </button>
              )}

              <div className="category-items">
                {category.items
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
                    </div>
                  ))}
              </div>

              {/* Scroll Button Right */}
              {startIndexes[index] + 5 < category.items.length && (
                <button className="scroll-button right" onClick={() => handleScrollRight(index)}>
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
