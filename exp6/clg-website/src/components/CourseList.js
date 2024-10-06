import React from 'react';
import Course from './Course';

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
  padding: '20px',
  backgroundColor: '#f9f9f9', // Light background for contrast
};

const headerStyles = {
  textAlign: 'center',
  color: '#002147', // Dark blue for header
};

const courseGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Responsive grid
  gap: '20px', // Space between course boxes
};

export default CourseList;
