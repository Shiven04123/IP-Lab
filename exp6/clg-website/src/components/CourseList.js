import React from 'react';

const courses = [
  { id: 1, name: 'Computer Science', description: 'Learn the fundamentals of computing.' },
  { id: 2, name: 'Business Administration', description: 'Explore the world of business.' },
  { id: 3, name: 'Graphic Design', description: 'Develop your design skills.' },
];

function CourseList() {
  return (
    <div style={courseListStyles}>
      <h2 style={headerStyles}>Available Courses</h2>
      <div style={courseGridStyles}>
        {courses.map(course => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

// Styles
const courseListStyles = {
  padding: '50px 20px', // More padding for space around the content
  backgroundColor: '#f0f4f8', // Light blue/gray background for the section
  textAlign: 'center', // Center the heading text
};

const headerStyles = {
  fontSize: '2.5rem', // Increase font size for better emphasis
  color: '#0056b3', // Dark blue for header
  marginBottom: '40px', // Add space below the header
};

const courseGridStyles = {
  display: 'flex',
  justifyContent: 'center', // Center the content horizontally
  alignItems: 'center', // Center content vertically
  flexWrap: 'wrap', // Ensure courses wrap onto new lines if necessary
  gap: '30px', // Space between course cards
  maxWidth: '1200px', // Constrain the grid to a reasonable max width
  margin: '0 auto', // Center the grid on the page
};

// Course component for individual course cards
const Course = ({ course }) => (
  <div style={courseCardStyles}>
    <h3 style={courseTitleStyles}>{course.name}</h3>
    <p style={courseDescriptionStyles}>{course.description}</p>
  </div>
);

// Example styling for Course component to ensure equal width
const courseCardStyles = {
  width: '300px', // Fixed width for equal-sized cards
  padding: '20px',
  backgroundColor: '#fff', // White background for course card contrast
  borderRadius: '8px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  transition: 'transform 0.3s, box-shadow 0.3s', // Transition for hover effect
};

const courseTitleStyles = {
  fontSize: '1.5rem',
  color: '#0056b3', // Dark blue for course title
  marginBottom: '10px',
};

const courseDescriptionStyles = {
  color: '#333',
};

// Exporting CourseList
export default CourseList;
