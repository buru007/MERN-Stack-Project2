import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact_us/Contact';
import Men from './pages/MenProducts/MenProducts';
<<<<<<< HEAD
import Wishlist from './pages/Wishtlist/Wishlist';
import ProductDescription from './pages/Product1Description/Product1Description'
=======
import Product1Description from './pages/Product1Description/Product1Description';
import Cart from './pages/Cart/Cart';
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/men" element={<Men />} />
<<<<<<< HEAD
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/ProductDescription" element={<ProductDescription  />} />
=======
        <Route path="/Product1Description" element={<Product1Description />} />
        <Route path="/cart" element={<Cart />} />
  

>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c
      </Routes>
    </Router>
  );
};

export default App;