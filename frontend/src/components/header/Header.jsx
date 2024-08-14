import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <h1 className="brand-name">Brand Name</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/catalogue">Catalogue</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <ul className="nav-links">
          <li>
            <a href="/order">Order Now</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Login/Signup</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
