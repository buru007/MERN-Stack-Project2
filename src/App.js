import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact_us/Contact';
import Men from './pages/MenProducts/MenProducts';
import Product1Description from './pages/Product1Description/Product1Description';
import Cart from './pages/Cart/Cart';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/men" element={<Men />} />
        <Route path="/Product1Description" element={<Product1Description />} />
        <Route path="/cart" element={<Cart />} />
  

      </Routes>
    </Router>
  );
};

export default App;