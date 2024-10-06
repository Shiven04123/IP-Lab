import React from 'react';

function Course({ course }) {
  const handleClick = () => {
    alert(`You selected: ${course.name}`);
  };

  return (
    <div
      style={courseCardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 style={courseTitleStyles}>{course.name}</h3>
      <p style={courseDescriptionStyles}>{course.description}</p>
      <button
        onClick={handleClick}
        style={buttonStyles}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      >
        Select Course
      </button>
    </div>
  );
}

// Styles
const courseCardStyles = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  transition: 'transform 0.2s',
  height: '250px', // Set a height for the cards
};

const courseTitleStyles = {
  margin: '0 0 10px',
  fontSize: '1.5rem',
  color: '#002147', // Dark blue for titles
};

const courseDescriptionStyles = {
  margin: '0 0 15px',
  fontSize: '1rem',
  color: '#555', // Gray color for description
};

// Updated button color
const buttonStyles = {
  backgroundColor: '#007BFF', // Light Blue
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
};

// Adding hover effect for the card and button
const handleMouseEnter = (e) => {
  e.currentTarget.style.transform = 'scale(1.02)';
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = 'scale(1)';
};

const handleButtonMouseEnter = (e) => {
  e.currentTarget.style.backgroundColor = '#0056b3'; // Darker blue on hover
};

const handleButtonMouseLeave = (e) => {
  e.currentTarget.style.backgroundColor = '#007BFF'; // Original light blue
};

export default Course;
