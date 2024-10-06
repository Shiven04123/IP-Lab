import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import About from './components/About';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection'; // Import the new HeroSection
import Testimonials from './components/Testimonials'; // Import the new Testimonials

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection /> {/* Hero Section */}
            <Testimonials /> {/* Testimonials Section */}
            <CourseList /> {/* Course List Section */}
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
