import React from 'react';

function About() {
  return (
    <div style={aboutContainer}>
      <h2 style={aboutHeader}>About Our College</h2>
      <p style={aboutText}>
        Manipur Institute of Technology (MIT) is a premier engineering institution dedicated to providing 
        world-class technical education in the northeastern region of India. Established with a vision to 
        foster innovation and cultivate future leaders in the field of engineering and technology, MIT offers 
        a dynamic learning environment that integrates cutting-edge technology, research, and industry-aligned training.
        <br /><br />
        MIT is known for its highly qualified faculty, state-of-the-art infrastructure, and a strong focus on practical, 
        hands-on learning. The institute offers undergraduate programs in various engineering disciplines, with a curriculum 
        designed to meet the evolving demands of the global technology landscape. With a commitment to academic excellence, 
        MIT also emphasizes the holistic development of its students by encouraging participation in extracurricular activities, 
        leadership programs, and technical forums.
        <br /><br />
        At MIT, we believe in shaping engineers who not only excel in their technical skills but also possess the ethical 
        values and innovative mindset needed to contribute to the nation's growth and solve real-world challenges. Located in 
        the serene setting of Manipur, the institute offers a perfect blend of academic rigor and cultural richness, creating 
        a unique and enriching experience for all its students.
      </p>
    </div>
  );
}

// Styles
const aboutContainer = {
  padding: '50px',
  backgroundColor: '#f5f8fa', // Soft light blue background for a calm look
  borderRadius: '10px', // Rounded corners for the container
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  maxWidth: '900px', // Max width to keep text content compact
  margin: '40px auto', // Center the content horizontally on the page
  lineHeight: '1.7', // Increase line height for better readability
};

const aboutHeader = {
  fontSize: '2.5rem', // Large, prominent heading
  color: '#0056b3', // Dark blue color for emphasis
  textAlign: 'center', // Center-align the heading
  marginBottom: '20px', // Space below the heading
  fontWeight: '600', // Slightly bold heading
};

const aboutText = {
  fontSize: '1.2rem', // Larger font size for better readability
  color: '#333', // Dark gray for the body text
  textAlign: 'justify', // Justify the paragraph text for clean edges
  lineHeight: '1.8', // Enhanced line height for readability
  marginTop: '20px',
};

export default About;
