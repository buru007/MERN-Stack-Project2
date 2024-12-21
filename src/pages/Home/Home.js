import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import './Home.css'; // Assuming you create a CSS file for styles

const Home = () => {
  // const deals = [
  //   'Deal 1: 50% off on Shoes',
  //   'Deal 2: Buy 1 Get 1 Free on T-Shirts',
  //   'Deal 3: Flat 30% off on Kids Wear',
  // ];

  const sliderImages = [
    { image: 'men2.jpg', text: 'Exclusive Offer on Shoes!' },
    { image: 'men3.jpg', text: 'Fashionable Styles for Everyone!' },
    { image: 'men4.jpg', text: 'Shop the Latest Trends Now!' },
  ];

  const products = {
    men: [
      {
        name: 'T-shirt',
        image: 'menimg.webp',
        price: '$25.99',
       
        size: ['S', 'M', 'L', 'XL'],
        color: ['Red', 'Blue', 'Black'],
        material: '100% Cotton',
        stock: true,
      },
      { name: 'T-shirt', image: 'menimg.webp' ,  price: '$25.99',  description: 'A comfortable and stylish T-shirt made from 90% cotton.', },
      { name: 'Jeans', image: 'menimg.webp' ,  price: '$25.99',  description: 'A comfortable and stylish T-shirt made from 80% cotton.',  },
      { name: 'Jeans', image: 'menimg.webp' ,  price: '$25.99' , description: 'A comfortable and stylish T-shirt made from 70% cotton.', },
      { name: 'Jeans', image: 'menimg.webp' ,  price: '$25.99', description: 'A comfortable and stylish T-shirt made from 60% cotton.', },
    
    ],
    women: [
      { name: 'Dress', image: 'men2.jpg' },
      { name: 'Skirt', image: 'men2.jpg' },
      { name: 'Skirt', image: 'men2.jpg' },
      { name: 'Skirt', image: 'men2.jpg' },
      { name: 'Skirt', image: 'men2.jpg' },
    ],

    kids: [
      { name: 'Jacket', image: 'men4.jpg' },
      { name: 'Shorts', image: 'men4.jpg' },
      { name: 'Jacket', image: 'men4.jpg' },
      { name: 'Shorts', image: 'men4.jpg' },
      { name: 'Shorts', image: 'men4.jpg' },
      
    ],
  };

  const [activeSlide, setActiveSlide] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="home">
        {/* Slider Section */}
        <div className="slider">
          {sliderImages.map((slide, index) => (
            <div
              key={index}
              className={`slide ${activeSlide === index ? 'slide-active' : ''}`}
            >
              <img src={`/images/${slide.image}`} alt={`Slide ${index + 1}`} />
              <div className="slider-text">{slide.text}</div>
            </div>
          ))}
        </div>

        {/* Product Sections */}
        {['men', 'women', 'kids'].map((category) => (
          <div key={category} className="product-section">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="product-list">
              {products[category].map((product, index) => (
                <div key={index} className="product-item">
                  <img src={`/images/${product.image}`} alt={product.name} />
                  <p>{product.name}</p>

                     <div className="product-details">
                      {product.description && (
                        <p className="product-description">{product.description}</p>
                      )}
                      {product.size && (
                        <p className="product-size">
                          Sizes: {product.size.join(', ')}
                        </p>
                      )}
                      {product.color && (
                        <p className="product-color">
                          Colors: {product.color.join(', ')}
                        </p>
                      )}
                      {product.material && (
                        <p className="product-material">
                          Material: {product.material}
                        </p>
                      )}
                      {product.stock && <p className="product-stock">{product.stock}</p>}
                    </div>
                  <p className="product-price">{product.price}</p>
                  <p className="product-description">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;