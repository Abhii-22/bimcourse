import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import ServiceDetail from './pages/ServiceDetail';
import Service from './components/Service';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><About /><Service /><Feedback /><Contact /></>} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
