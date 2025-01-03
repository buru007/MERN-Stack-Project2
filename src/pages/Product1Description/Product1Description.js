import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access the product ID
import Layout from '../../components/Layout/Layout';
import './Product1Description.css';

const ProductDescription = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [selectedImage, setSelectedImage] = useState('/images/11.jpg'); // State to manage selected image

  // List of images (for example, here could be dynamic data fetched based on the product ID)
  const images = ['/images/11.jpg', '/images/22.jpg', '/images/33.jpg', '/images/44.jpg'];

  // Function to handle thumbnail click
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Layout>
      <div className="product-description-container">
        {/* Left side: Product Images */}
        <div className="product-images">
          {/* Main large image */}
          <div className="main-image-container">
            <img src={selectedImage} alt="Selected Product" className="main-image" />
          </div>
          {/* Thumbnail images */}
          <div className="image-grid">
            {images.map((image, index) => (
              <div key={index} className="grid-image-container">
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className={`grid-image ${selectedImage === image ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(image)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Product Details */}
        <div className="product-details">
          <h1 className="product-title">Product Name {id}</h1> {/* Use the product ID here */}
          {/* Other product details */}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDescription;
