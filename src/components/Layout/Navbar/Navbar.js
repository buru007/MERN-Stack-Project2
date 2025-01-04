import React from 'react';
<<<<<<< HEAD
import './Navbar.css'; // Make sure your styles are applied
=======
import { Link } from 'react-router-dom';
import "./Navbar.css";
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              {/* Cart Icon */}
              <a className="nav-link" href="#">
                <i className="bi bi-cart"></i> {/* Cart Icon */}
                Cart
              </a>
            </li>
            <li className="nav-item">
              {/* Wishlist Icon */}
              <a className="nav-link" href="/wishlist">
                <i className="bi bi-heart"></i> {/* Wishlist Icon */}
                Wishlist
              </a>
=======
            <Link className="nav-link" to="/cart">Cart 🛒</Link>
>>>>>>> 136e2be7f504fcfbf8aee474246b81373356288c
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Category
              </a>
              <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/men">Men</Link></li>
                <li><a className="dropdown-item" href="#">Women</a></li>
                <li><a className="dropdown-item" href="#">Kids</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
