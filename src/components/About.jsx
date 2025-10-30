import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const sectionRef = useRef(null);
  const fullText =
    'Pioneering the future of construction with innovative design and Building Information Modeling (BIM) expertise.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.animation = 'none';
      }
    }, 50);

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-wrapper">

        {/* ========== SECTION 1: HEADER INTRO ========== */}
        <div className="about-hero animate-on-scroll">
          <div className="about-hero-content">
            <h2 className="about-heading">
              About <span>BIM Construct</span>
            </h2>
            <p className="about-intro-animated">
              {text}
              <span className="cursor"></span>
            </p>
          </div>
          <div className="about-hero-image">
            <img src="/images/about.jpg" alt="BIM Construct Office Design" />
          </div>
        </div>

        {/* ========== SECTION 2: MAIN CONTENT ========== */}
        <div className="about-main animate-on-scroll">
          <div className="about-image">
            <img src="/images/about1.jpg" alt="BIM Construct Blueprint" />
          </div>
          <div className="about-description">
            <p>
              Welcome to <strong>BIM Construct</strong> — where innovative design meets precision construction. We specialize in transforming spaces and streamlining projects through the power of Building Information Modeling (BIM).
            </p>
            <p>
              From residential and commercial renovations to large-scale property development, our team of experts leverages cutting-edge technology to deliver exceptional results, saving you time and money while bringing your vision to life.
            </p>
          </div>
        </div>

        {/* ========== SECTION 3: HIGHLIGHTS & STATS ========== */}
        <div className="about-extras animate-on-scroll">
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>✨ Innovative Design Solutions</h3>
              <p>Our creative team delivers bespoke designs that are both beautiful and functional, tailored to your unique needs.</p>
            </div>
            <div className="highlight-card">
              <h3>🏗️ BIM-Powered Efficiency</h3>
              <p>We use advanced BIM technology to optimize every phase of the construction process, ensuring accuracy and reducing waste.</p>
            </div>
            <div className="highlight-card">
              <h3>🤝 Client-Centric Approach</h3>
              <p>Your vision is our priority. We collaborate closely with you from concept to completion to ensure your expectations are exceeded.</p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>150+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card">
              <h3>1M+</h3>
              <p>Sq. Ft. Designed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
