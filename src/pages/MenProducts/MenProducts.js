import React, { useState } from 'react';
import './men.css';

const Men = () => {
  // Sample categories and items with images
  const categories = [
    {
      name: 'T-Shirts',
      items: [
        { name: 'T-Shirt 1', img: 'men2.jpg' },
        { name: 'T-Shirt 2', img: '/assets/t-shirts/t-shirt2.jpg' },
        { name: 'T-Shirt 3', img: '/assets/t-shirts/t-shirt3.jpg' },
        { name: 'T-Shirt 4', img: '/assets/t-shirts/t-shirt4.jpg' },
        { name: 'T-Shirt 5', img: '/assets/t-shirts/t-shirt5.jpg' },
        { name: 'T-Shirt 6', img: '/assets/t-shirts/t-shirt6.jpg' },
        { name: 'T-Shirt 7', img: '/assets/t-shirts/t-shirt7.jpg' },
        { name: 'T-Shirt 8', img: '/assets/t-shirts/t-shirt8.jpg' },
        { name: 'T-Shirt 9', img: '/assets/t-shirts/t-shirt9.jpg' },
        { name: 'T-Shirt 10', img: '/assets/t-shirts/t-shirt10.jpg' }
      ]
    },
    {
      name: 'Jeans',
      items: [
        { name: 'Jeans 1', img: '/assets/jeans/jeans1.jpg' },
        { name: 'Jeans 2', img: '/assets/jeans/jeans2.jpg' },
        { name: 'Jeans 3', img: '/assets/jeans/jeans3.jpg' },
        { name: 'Jeans 4', img: '/assets/jeans/jeans4.jpg' },
        { name: 'Jeans 5', img: '/assets/jeans/jeans5.jpg' },
        { name: 'Jeans 6', img: '/assets/jeans/jeans6.jpg' },
        { name: 'Jeans 7', img: '/assets/jeans/jeans7.jpg' },
        { name: 'Jeans 8', img: '/assets/jeans/jeans8.jpg' },
        { name: 'Jeans 9', img: '/assets/jeans/jeans9.jpg' },
        { name: 'Jeans 10', img: '/assets/jeans/jeans10.jpg' }
      ]
    },
    {
      name: 'Shoes',
      items: [
        { name: 'Shoes 1', img: '/assets/shoes/shoes1.jpg' },
        { name: 'Shoes 2', img: '/assets/shoes/shoes2.jpg' },
        { name: 'Shoes 3', img: '/assets/shoes/shoes3.jpg' },
        { name: 'Shoes 4', img: '/assets/shoes/shoes4.jpg' },
        { name: 'Shoes 5', img: '/assets/shoes/shoes5.jpg' },
        { name: 'Shoes 6', img: '/assets/shoes/shoes6.jpg' },
        { name: 'Shoes 7', img: '/assets/shoes/shoes7.jpg' },
        { name: 'Shoes 8', img: '/assets/shoes/shoes8.jpg' },
        { name: 'Shoes 9', img: '/assets/shoes/shoes9.jpg' },
        { name: 'Shoes 10', img: '/assets/shoes/shoes10.jpg' }
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
                    {/* <img
                      src={item.img} // Use path relative to the public directory
                      alt={item.name}
                      className="item-image"
                    /> */}
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
  );
};

export default Men;
