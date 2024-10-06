import React from 'react';

function HeroSection() {
  return (
    <section style={heroSectionStyles}>
      <div style={heroContentStyles}>
        <h1 style={heroTitleStyles}>Welcome to Manipur Institute of Technology</h1>
        <p style={heroSubtitleStyles}>Empowering the next generation of tech innovators and business leaders.</p>
        <button style={heroButtonStyles} onClick={() => alert('Learn More Clicked!')}>
          Learn More
        </button>
      </div>
    </section>
  );
}

// Styles for the Hero Section
const heroSectionStyles = {
  backgroundImage: 'url(https://images.unsplash.com/photo-1620458883441-3d278950d90b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Placeholder background image, replace with actual image URL
  backgroundSize: "cover",
  backgroundPosition: 'center',
  padding: '100px 0',
  height: '450px',
  color: 'white',
  textAlign: 'center',
};

const heroContentStyles = {
  maxWidth: '800px',
  margin: '0 auto',
};

const heroTitleStyles = {
  fontSize: '3rem',
  margin: '0 0 20px',
};

const heroSubtitleStyles = {
  fontSize: '1.5rem',
  margin: '0 0 30px',
};

const heroButtonStyles = {
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  padding: '15px 30px',
  fontSize: '1.2rem',
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

export default HeroSection;
