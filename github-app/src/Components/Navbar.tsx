import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand text-light">
            Shawn and Partners CRM
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

