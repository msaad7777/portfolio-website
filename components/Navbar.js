import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the Navbar.css file

const Navbar = () => {
  return (
    <nav>
      <div className="logo">MS</div>  {/* Replace 'MS' with your initials or logo */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
