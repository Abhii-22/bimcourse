import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Clock, GraduationCap, Users, ArrowLeft, Building, ClipboardCheck, Rocket, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesData = {
    'architectural-design': {
      title: 'Architectural Design',
      category: 'Architecture & Design',
      description: 'We provide comprehensive architectural design services, from initial concept to final detailing. Our services cover landscape design, architectural planning, 3D modeling, interior design, and working drawings.',
      serviceDetails: [
        'Landscape design',
        'Architectural planning and design',
        '3D modeling and visualization',
        'Interior design and space detailing',
        'Working drawing and detailing'
      ]
    },
    'interior-design': {
      title: 'Interior Design',
      category: 'Design & Aesthetics',
      description: 'We offer a complete range of interior design services for both residential and commercial spaces. Our expertise includes modular kitchens, wardrobe design, lighting, 3D visualization, and renovation projects.',
      serviceDetails: [
        'Residential and commercial interior design',
        'Modular kitchen and wardrobe design',
        'Lighting and ceiling design',
        '3D interior visualization',
        'Renovation works and design'
      ]
    },
    '3d-modeling': {
      title: '3D Modeling',
      category: 'Digital Arts',
      description: 'Our 3D modeling services bring your visions to life. We create detailed and realistic 3D models for architectural visualization, product design, and more, using the latest industry-standard software.',
      serviceDetails: [
        'Architectural 3D modeling',
        'Product and furniture modeling',
        'High-realism rendering',
        'Virtual reality (VR) walkthroughs',
        '3D animation and flythroughs'
      ]
    },
    'site-planning': {
      title: 'Site Planning',
      category: 'Urban & Land Planning',
      description: 'We provide expert site planning services, covering everything from initial site analysis to final plan development. Our focus is on sustainable and efficient land use, ensuring compliance with all zoning and environmental regulations.',
      serviceDetails: [
        'Comprehensive site analysis',
        'Zoning and land use assessment',
        'Environmental impact studies',
        'Sustainable design and green infrastructure',
        'Master planning and development strategies'
      ]
    },
  };

  const service = servicesData[serviceId] || servicesData['architectural-design'];

  return (
    <div className="course-detail-page">
      <div className="course-detail-container">
        <div className="back-button-container">
          <button onClick={() => navigate(-1)} className="back-link">
            <ArrowLeft size={16} /> Back to Services
          </button>
        </div>
        
        <div className="service-header">
          <span className="course-category">{service.category}</span>
          <h1>{service.title}</h1>
          <p className="course-description">{service.description}</p>
        </div>
        
        <div className="info-cards">
          <div className="info-card">
            <Clock className="info-icon" size={28} />
            <span>Timeline</span>
            <strong>Project-based</strong>
          </div>
          <div className="info-card">
            <Users className="info-icon" size={28} />
            <span>Expert Team</span>
            <strong>Architects & Designers</strong>
          </div>
          <div className="info-card">
            <ClipboardCheck className="info-icon" size={28} />
            <span>Quality</span>
            <strong>Standards Compliant</strong>
          </div>
        </div>

        <div className="course-detail-content">
          <main className="course-main-content">
            <div className="service-details-section">
              <h2>Service Details</h2>
              <div className="service-details-grid">
                {service.serviceDetails.map((item, index) => (
                  <div key={index} className="service-detail-card">
                    <div className="detail-icon">
                      <CheckCircle2 size={24} />
                    </div>
                    <div className="detail-content">
                      <h3>{item}</h3>
                      <p>Comprehensive professional service</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
          
          <aside className="course-sidebar">
            <div className="sidebar-widget">
              <div className="provider-summary">
                <Building size={32} className="provider-icon" />
                <h3>Service Information</h3>
              </div>
              
              <div className="provider-info">
                <span className="provider-label">Provider</span>
                <span className="provider-name">BIM Construct</span>
              </div>

              <div className="why-choose-us">
                <h4>Why Choose Us?</h4>
                <ul>
                  <li><Award size={18} /> <span>Industry Experts</span></li>
                  <li><Users size={18} /> <span>Collaborative Approach</span></li>
                  <li><ShieldCheck size={18} /> <span>Quality Assured</span></li>
                </ul>
              </div>
              
              <button className="enroll-now-btn">
                <Rocket size={18} />
                Get Started
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
