import React, { useState } from 'react';
import './men.css';
import Layout from '../../component/layout/layout'

const Men = () => {
  // Sample categories and items with images
  const categories = [
    {
      name: 'T-Shirts',
      items: [
        { name: 'T-Shirt 1', img: 'tshirt1.jpeg' },
        { name: 'T-Shirt 2', img: 'tshirt2.jpeg' },
        { name: 'T-Shirt 3', img: 'tshirt3.jpeg' },
        { name: 'T-Shirt 4', img: 'tshirt4.jpeg' },
        { name: 'T-Shirt 5', img: 'tshirt5.jpeg' },
        { name: 'T-Shirt 6', img: 'tshirt5.jpeg' },
        { name: 'T-Shirt 7', img: 'tshirt4.jpeg' },
        { name: 'T-Shirt 8', img: 'tshirt3.jpeg' },
        { name: 'T-Shirt 9', img: 'tshirt2.jpeg' },
        { name: 'T-Shirt 10', img: 'tshirt1.jpeg' }
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
        { name: 'Jeans 10', img: 'jeans1.jpeg' }
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
        { name: 'Shoes 10', img: 'shoes1.webp' }
      ]
    }
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
                .map((item, idx) => (
                  <div key={idx} className="item">
                   <img
                     src={`/images/${item.img}`} // Use path relative to the public folder
                      alt={item.name}
                      className="item-image"
                      />
                    <p>{item.name}</p>
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
