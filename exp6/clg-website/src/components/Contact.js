import React from 'react';

function Contact() {
  return (
    <div style={contactContainer}>
      <h2 style={contactHeader}>Get in Touch with Us</h2>
      <p style={contactDescription}>
        Whether you have questions about our programs, admissions, or anything else, we're here to help! Feel free to
        reach out to us through the contact details below. Our team will get back to you as soon as possible.
      </p>
      <div style={contactDetails}>
        <p style={contactText}>
          <strong>Email:</strong> info@mit.edu
        </p>
        <p style={contactText}>
          <strong>Phone:</strong> 2271925661
        </p>
        <p style={contactText}>
          <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM
        </p>
        <p style={contactText}>
          <strong>Address:</strong> Manipur Institute of Technology, Takyelpat, Imphal, Manipur, India.
        </p>
      </div>
    </div>
  );
}

// Styles
const contactContainer = {
  padding: '60px',
  backgroundColor: '#f0f4f8', // Light blue-gray background
  borderRadius: '12px', // Rounded corners for the section
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Enhanced shadow for more depth
  maxWidth: '800px', // More space for a descriptive layout
  margin: '50px auto', // Center the section with more top and bottom margin
  textAlign: 'left', // Align text to the left for a formal feel
  lineHeight: '1.6', // More line spacing for readability
};

const contactHeader = {
  fontSize: '2.8rem', // Larger font for the header
  color: '#0056b3', // Dark blue header color for emphasis
  marginBottom: '20px', // Space below the heading
  fontWeight: '700', // Bolder font weight
};

const contactDescription = {
  fontSize: '1.3rem', // Larger description font for readability
  color: '#555', // Slightly darker gray for the description text
  marginBottom: '30px', // Space between description and contact details
};

const contactDetails = {
  padding: '20px',
  backgroundColor: '#fff', // White background for the contact details section
  borderRadius: '8px', // Slightly rounded corners
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for the details section
};

const contactText = {
  fontSize: '1.2rem', // Larger font for contact details
  color: '#333', // Dark gray text
  marginBottom: '15px', // Space between lines
};

export default Contact;
