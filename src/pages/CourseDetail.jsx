import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
    const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coursesData = {
    'architectural-design': {
      title: 'Architectural Design',
      category: 'Architecture & Design',
      description: 'Learn the principles of architectural design, from initial concept to final presentation. This course covers space planning, building materials, and modern design software.',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      audience: 'Aspiring Architects, Students',
      curriculum: [
        'Introduction to Architectural Principles',
        'Sketching and Conceptual Design',
        '2D Drafting with CAD Software',
        '3D Modeling and Visualization',
        'Building Materials and Construction Methods',
        'Portfolio Development',
        'Final Project Presentation'
      ],
      whatYoullLearn: [
        'Fundamental architectural design concepts',
        'Proficiency in 2D and 3D design software',
        'How to create a professional portfolio',
        'Understanding of building codes and materials'
      ],
      provider: 'BIM course',
      prerequisites: [
        'No prior experience required',
        'A passion for design and architecture'
      ]
    },
    'interior-design': {
      title: 'Interior Design',
      category: 'Design & Aesthetics',
      description: 'Master the art of creating beautiful and functional interior spaces. This course explores color theory, material selection, and spatial arrangement to bring your vision to life.',
      duration: '8 Months',
      level: 'All Levels',
      audience: 'Design Enthusiasts, Homeowners',
      curriculum: [
        'Fundamentals of Interior Design',
        'Color Theory and Application',
        'Furniture Layout and Space Planning',
        'Lighting Design and Techniques',
        'Material and Finish Selection',
        'Client Communication and Project Management',
        'Creating a Mood Board and Final Design'
      ],
      whatYoullLearn: [
        'Principles of color and light',
        'Effective space planning',
        'Material and texture coordination',
        'How to manage a design project from start to finish'
      ],
      provider: 'BIM course',
      prerequisites: [
        'A creative mindset',
        'Interest in aesthetics and design trends'
      ]
    },
    '3d-modeling': {
      title: '3D Modeling',
      category: 'Digital Arts',
      description: 'Dive into the world of 3D modeling. Learn to create stunning 3D assets for games, films, and architectural visualization using industry-standard software.',
      duration: '4 Months',
      level: 'Intermediate',
      audience: 'Artists, Designers, Hobbyists',
      curriculum: [
        'Introduction to 3D Modeling Concepts',
        'Polygon and Subdivision Modeling',
        'UV Mapping and Texturing',
        'Character and Environment Modeling',
        'Sculpting and High-Poly Details',
        'Rendering and Presentation',
        'Portfolio-Ready Project Creation'
      ],
      whatYoullLearn: [
        'Advanced 3D modeling techniques',
        'Texturing and UV unwrapping skills',
        'How to create game-ready assets',
        'Rendering for professional presentation'
      ],
      provider: 'BIM course',
      prerequisites: [
        'Basic computer proficiency',
        'Prior experience with any 2D or 3D software is helpful'
      ]
    },
    'site-planning': {
      title: 'Site Planning',
      category: 'Urban & Land Planning',
      description: 'Understand the essentials of site analysis and planning. This course covers land use, zoning regulations, environmental impact, and sustainable design practices.',
      duration: '7 Months',
      level: 'Intermediate',
      audience: 'Urban Planners, Landscape Architects',
      curriculum: [
        'Principles of Site Analysis',
        'Zoning and Land Use Regulations',
        'Environmental Site Assessment',
        'Grading, Drainage, and Earthwork',
        'Sustainable Site Design',
        'Circulation and Parking Design',
        'Final Site Plan Development'
      ],
      whatYoullLearn: [
        'How to conduct a comprehensive site analysis',
        'Understanding of zoning and regulatory compliance',
        'Sustainable and eco-friendly design techniques',
        'Creating a complete and professional site plan'
      ],
      provider: 'BIM course',
      prerequisites: [
        'Background in architecture, civil engineering, or urban planning',
        'Familiarity with CAD software'
      ]
    }
  };

  const course = coursesData[courseId] || coursesData['architectural-design'];

  return (
    <div className="course-detail-page">
      <div className="course-detail-container">
                <button onClick={() => navigate(-1)} className="back-link">&larr; Back to Courses</button>
        <div className="course-detail-content">
          <main className="course-main-content">
            <span className="course-category">{course.category}</span>
            <h1>{course.title}</h1>
            <p className="course-description">{course.description}</p>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">⏱️</div>
                <span>Duration</span>
                <strong>{course.duration}</strong>
              </div>
              <div className="info-card">
                <div className="info-icon">🎓</div>
                <span>Level</span>
                <strong>{course.level}</strong>
              </div>
              <div className="info-card">
                <div className="info-icon">👥</div>
                <span>Audience</span>
                <strong>{course.audience}</strong>
              </div>
            </div>
            <div className="curriculum">
              <h2>Curriculum</h2>
              <ul>
                {course.curriculum.map((item, index) => (
                  <li key={index}><span>{index + 1}</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="learning-outcomes">
              <h2>What You'll Learn</h2>
              <div className="outcomes-grid">
                <ul>
                  {course.whatYoullLearn.slice(0, 2).map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
                <ul>
                  {course.whatYoullLearn.slice(2, 4).map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
          <aside className="course-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-header">
                <div className="provider-icon">🏢</div>
                <h3>Course Information</h3>
              </div>
              <div className="provider-info">
                <span className="provider-label">Provider</span>
                <span className="provider-name">{course.provider}</span>
              </div>
              <div className="prerequisites-section">
                <h4>📋 Prerequisites</h4>
                <ul>
                  {course.prerequisites.map((item, index) => (
                    <li key={index}>
                      <span className="prereq-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="enroll-now-btn">
                <span className="btn-icon">🚀</span>
                Enroll Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
