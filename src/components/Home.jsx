import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const slides = [
  {
    src: '/images/arch.jpg',
    serviceId: 'architectural-design',
    text: {
      title: 'Architectural Design',
      description:
        'BIM Architectural Design integrates intelligent 3D modeling with data-driven processes to enhance accuracy, collaboration, and efficiency, enabling architects to seamlessly plan, visualize, and manage projects from concept to construction.'
    }
  },
  {
    src: '/images/interior.jpg',
    serviceId: 'interior-design',
    text: {
      title: 'Interior Design',
      description:
        'Interior Design focuses on creating functional, aesthetic, and inspiring indoor spaces by combining creativity, spatial planning, and material selection to enhance comfort and style in residential and commercial environments.'
    }
  },
  {
    src: '/images/3D.jpg',
    serviceId: '3d-modeling',
    text: {
      title: '3D Modeling',
      description:
        '3D Modeling involves creating realistic digital representations of objects, structures, or environments using specialized software, enabling precise visualization, design analysis, and presentation before actual production or construction.'
    }
  },
  {
    src: '/images/Site.jpg',
    serviceId: 'site-planning',
    text: {
      title: 'Site Planning',
      description:
        'Site Planning involves analyzing, organizing, and designing land use to optimize functionality, accessibility, and aesthetics while considering environmental, structural, and regulatory factors for sustainable development.'
    }
  },
  
];

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animation, setAnimation] = useState('fade-in');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('fade-out');
      setTimeout(() => {
        setCurrentSlideIndex(prev => (prev + 1) % slides.length);
        setAnimation('fade-in');
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const exploreService = () => {
    const currentSlide = slides[currentSlideIndex];
    navigate(`/service/${currentSlide.serviceId}`);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div id="home">
      <div
        className="home-slider"
        style={{ backgroundImage: `url(${currentSlide.src})` }}
      >
        <div className={`slider-text ${animation}`}>
          <h1>{currentSlide.text.title}</h1>
          <p>{currentSlide.text.description}</p>
          <button className="explore-btn" onClick={exploreService}>Explore Services →</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
