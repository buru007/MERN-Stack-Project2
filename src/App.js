import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact_us/Contact';
import Men from './pages/MenProducts/MenProducts';
import Wishlist from './pages/Wishtlist/Wishlist';
import ProductDescription from './pages/Product1Description/Product1Description'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/men" element={<Men />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/ProductDescription" element={<ProductDescription  />} />
      </Routes>
    </Router>
  );
};

export default App;