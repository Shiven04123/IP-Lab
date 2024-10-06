import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
