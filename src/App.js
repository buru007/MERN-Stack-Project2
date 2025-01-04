import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact_us/Contact';
import Men from './pages/MenProducts/MenProducts';
<<<<<<< HEAD
import Product1Description from './pages/Product1Description/Product1Description';
import Cart from './pages/Cart/Cart';
=======
import Wishlist from './pages/Wishtlist/Wishlist';
import ProductDescription from './pages/Product1Description/Product1Description'
>>>>>>> 0ef68ed825326f08610f5852279e61de8b83b3b5
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/men" element={<Men />} />
<<<<<<< HEAD
        <Route path="/Product1Description" element={<Product1Description />} />
        <Route path="/cart" element={<Cart />} />
  

=======
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/ProductDescription" element={<ProductDescription  />} />
>>>>>>> 0ef68ed825326f08610f5852279e61de8b83b3b5
      </Routes>
    </Router>
  );
};

export default App;