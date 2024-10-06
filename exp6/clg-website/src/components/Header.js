import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyles}>
      <div style={logoContainer}>
        <h1 style={logoText}>Manipur Institute of Technology</h1>
      </div>
      <nav style={navStyles}>
        <Link to="/" style={linkStyles}>Home</Link>
        <Link to="/about" style={linkStyles}>About</Link>
        <Link to="/contact" style={linkStyles}>Contact</Link>
        <Link to="/courses" style={linkStyles}>Courses</Link>
      </nav>
    </header>
  );
}

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 30px',
  backgroundColor: '#002147', // Dark blue for a more academic tone
  color: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
};

const logoText = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  margin: 0,
};

const navStyles = {
  display: 'flex',
  gap: '20px',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: '500',
  padding: '5px 10px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
};

const linkHoverStyles = {
  ...linkStyles,
  backgroundColor: '#0056b3', // Lighter blue on hover
};

export default Header;
