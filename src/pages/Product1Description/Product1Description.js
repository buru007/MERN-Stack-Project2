import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout'; // Ensure Layout is correctly imported
import './Product1Description.css'; // Make sure the CSS path is correct

const ProductDescription = () => {
  const [selectedImage, setSelectedImage] = useState('/images/11.jpg'); // State to manage selected image

  // List of images
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
          <h1 className="product-title">Product Name</h1>
          <h2 className="product-subtitle">Product Subtitle</h2>
          <p className="product-price">
            ₹<span className="original-price">2000</span> ₹1500
            <span className="mrp">MRP</span>
            <span className="discount">30% off</span>
            <span className="inclusive-taxes">Inclusive of all taxes</span>
          </p>

          {/* Size Selector */}
          <div className="size-selector">
            <label>Select Size:</label>
            <div className="size-options">
              <button className="size-option">XS</button>
              <button className="size-option">S</button>
              <button className="size-option active">M</button>
              <button className="size-option">L</button>
              <button className="size-option">XL</button>
            </div>
          </div>

          {/* Product Actions */}
          <div className="product-actions">
            <button className="add-to-bag">🛍️ Add to Bag</button>
            <button className="wishlist-button">
              <span role="img" aria-label="heart">♡</span> Wishlist
            </button>
          </div>

          {/* Delivery Options */}
          <div className="delivery-options">
            <span role="img" aria-label="car">🚚</span>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="pincode-input"
            />
            <button className="check-button">Check</button>
            <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 14 days returns and exchanges</p>
          </div>

          {/* Best Offer Section */}
          <div className="best-offer">
            <h3>Best Offer</h3>
            <p>Get the best deals on this product right now!</p>
          </div>

          {/* Bank Offers Section */}
          <div className="bank-offers">
            <h3>Bank Offers</h3>
            <ul>
              <li>10% Discount on HDFC Bank Credit Card EMI</li>
              <li>10% Discount on IDFC FIRST Bank Credit Card EMI</li>
              <li>5% Discount on Myntra Kotak Credit Card</li>
            </ul>
          </div>

          {/* Product Details Section */}
          <div className="product-details-section">
            <h3>Product Details</h3>
            <p>This is a detailed description of the product.</p>
          </div>

          {/* Size & Fit Section */}
          <div className="size-fit">
            <h3>Size & Fit</h3>
            <p>Our model is wearing size M. The fit is true to size.</p>
          </div>

          {/* Product Specifications */}
          <div className="product-specifications">
            <h3>Product Specifications</h3>
            <ul>
              <li>Brand: Example</li>
              <li>Material: Cotton</li>
              <li>Color: Red</li>
              <li>Product Code: 31714333</li>
              <li>Seller: ABC Enterprises</li>
              <li>
                <a href="/supplier-info" target="_blank" rel="noopener noreferrer">
                  View Supplier Information
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Reviews */}
          <div className="customer-reviews">
            <h3>Customer Reviews</h3>
            <div className="review">
              <p>⭐⭐⭐⭐☆</p>
              <p>"Great quality, true to size!"</p>
            </div>
            <div className="review">
              <p>⭐⭐⭐⭐⭐</p>
              <p>"Very comfortable and stylish!"</p>
            </div>
            {/* Add more reviews here */}
          </div>

          {/* Recently Viewed Products */}
          <div className="recently-viewed">
            <h3>Recently Viewed Products</h3>
            <div className="recently-viewed-items">
              {/* Display recently viewed products here */}
            </div>
          </div>

          {/* Product Recommendations */}
          <div className="product-recommendations">
            <h3>You May Also Like</h3>
            <div className="recommendations-items">
              {/* Display similar products here */}
            </div>
          </div>

          {/* Return & Exchange Policy */}
          <div className="return-policy">
            <h3>Return & Exchange Policy</h3>
            <p>If you're not satisfied with your purchase, return it within 14 days for a full refund or exchange.</p>
          </div>

          {/* Gift Wrap & Personalization Option */}
          <div className="gift-wrap">
            <h3>Gift Wrap & Personalization</h3>
            <label>
              <input type="checkbox" /> Add Gift Wrap
            </label>
            <label>
              <input type="checkbox" /> Personalize with a Message
            </label>
          </div>

          {/* Social Media Sharing */}
          <div className="social-sharing">
            <h3>Share This Product</h3>
            <button className="social-button"> Facebook</button>
            <button className="social-button">Twitter</button>
            <button className="social-button">WhatsApp</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDescription;
