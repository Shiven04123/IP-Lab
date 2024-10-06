import React from 'react';

function Testimonials() {
  const testimonialsData = [
    { name: 'John Doe', quote: 'This institute has provided me with the best education experience.' },
    { name: 'Jane Smith', quote: 'The faculty and infrastructure are top-notch. Highly recommend!' },
    { name: 'Samuel Johnson', quote: 'I’ve learned so much and feel ready to step into the tech world.' },
  ];

  return (
    <section style={testimonialSectionStyles}>
      <h2 style={testimonialTitleStyles}>What Our Students Say</h2>
      <div style={testimonialGridStyles}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

// Styles for Testimonials
const testimonialSectionStyles = {
  padding: '50px 20px',
  backgroundColor: '#f0f4f8', // Softer background color
  color: '#333', // Dark text for readability
  textAlign: 'center',
};

const testimonialTitleStyles = {
  fontSize: '2.5rem',
  margin: '0 0 30px',
  color: '#0056b3', // A calm blue for the title
};

const testimonialGridStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
};

const testimonialCardStyles = {
  width: '300px',
  padding: '20px',
  border: '1px solid #ccc', // Light gray border
  borderRadius: '8px',
  margin: '10px',
  backgroundColor: '#ffffff', // White card background
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const testimonialQuoteStyles = {
  fontSize: '1.2rem',
  fontStyle: 'italic',
  marginBottom: '15px',
  color: '#555', // Dark gray for the quote
};

const testimonialNameStyles = {
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#0056b3', // Match title color
};

// Hover effects for testimonial cards
const handleMouseEnter = (e) => {
  e.currentTarget.style.transform = 'scale(1.03)'; // Slightly enlarge the card on hover
  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)'; // Darker shadow on hover
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = 'scale(1)'; // Reset scale on mouse leave
  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'; // Reset shadow
};

// Add event listeners for mouse enter and leave
const TestimonialCard = ({ testimonial }) => (
  <div
    style={testimonialCardStyles}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <p style={testimonialQuoteStyles}>"{testimonial.quote}"</p>
    <p style={testimonialNameStyles}>- {testimonial.name}</p>
  </div>
);

export default Testimonials;
