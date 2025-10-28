import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Feedback from './components/Feedback';
import Courses from './components/Courses';
import Contact from './components/Contact';
import CourseDetail from './pages/CourseDetail';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><About /><Courses /><Feedback /><Contact /></>} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
