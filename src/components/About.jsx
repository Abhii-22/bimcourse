import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const sectionRef = useRef(null);
  const fullText =
    'Empowering engineers, students, and professionals with world-class training in BIM infrastructure design and analysis software.';

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
              About <span>BIMcourse</span>
            </h2>
            <p className="about-intro-animated">
              {text}
              <span className="cursor"></span>
            </p>
          </div>
          <div className="about-hero-image">
            <img src="/images/about.jpg" alt="BIMcourse Overview" />
          </div>
        </div>

        {/* ========== SECTION 2: MAIN CONTENT ========== */}
        <div className="about-main animate-on-scroll">
          <div className="about-image">
            <img src="/images/about1.jpg" alt="BIMcourse Training" />
          </div>
          <div className="about-description">
            <p>
              Welcome to <strong>BIMcourse</strong> — your trusted destination for mastering
              infrastructure design and analysis tools through guided learning and hands-on practice.
            </p>
            <p>
              We help engineers, students, and professionals upgrade their skills through structured
              courses, real-world projects, and professional mentorship — ensuring you're job-ready
              for global opportunities in infrastructure design.
            </p>
          </div>
        </div>

        {/* ========== SECTION 3: HIGHLIGHTS & STATS ========== */}
        <div className="about-extras animate-on-scroll">
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🔧 Industry-Focused Training</h3>
              <p>Learn directly from certified professionals with years of field experience.</p>
            </div>
            <div className="highlight-card">
              <h3>🏗️ Real Project Practice</h3>
              <p>Hands-on experience with structural, civil, and water infrastructure design.</p>
            </div>
            <div className="highlight-card">
              <h3>🎓 Career Mentorship</h3>
              <p>Our career mentors help you prepare for real interviews and job placements.</p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Engineers Trained</p>
            </div>
            <div className="stat-card">
              <h3>30+</h3>
              <p>Software Tools Covered</p>
            </div>
            <div className="stat-card">
              <h3>95%</h3>
              <p>Placement Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
