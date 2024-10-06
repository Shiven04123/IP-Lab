import React from 'react';

function Footer() {
  return (
    <footer style={footerStyles}>
      <div style={footerContent}>
        <p style={footerText}>&copy; 2024 Manipur Institute of Technology. All rights reserved.</p>
        <div style={socialLinks}>
          <a href="#" style={linkStyles}>Facebook</a>
          <a href="#" style={linkStyles}>Twitter</a>
          <a href="#" style={linkStyles}>Instagram</a>
          <a href="#" style={linkStyles}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

const footerStyles = {
  padding: '20px',
  backgroundColor: '#002147', // Match the header color for consistency
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

const footerContent = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const footerText = {
  margin: '0',
  fontSize: '1rem',
};

const socialLinks = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const linkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
};

const linkHoverStyles = {
  color: '#0056b3', // Lighter blue on hover
};

export default Footer;
