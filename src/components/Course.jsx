import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const servicesData = [
  {
    title: "BIM for Architecture",
    serviceId: "bim-for-architecture",
    image:
      "https://images.prismic.io/travauxlib/4c6ff268-9350-4578-b460-fb4101c5ba99_etape-realisation-plans-maison.jpg?auto=compress,format&rect=0,0,1050,700&w=1050&h=700",
    duration: "4 Months",
    students: "1,200+",
    successRate: "96%",
    rating: 4.9,
    tags: ["Structural Analysis", "Steel Design", "Concrete Design", "Seismic"],
  },
  {
    title: "BIM for Construction",
    serviceId: "bim-for-construction",
    image:
      "https://www.constructionplacements.com/wp-content/uploads/2024/02/The-Benefits-of-BIM-Virtual-Design-and-Construction.jpg",
    duration: "4 Months",
    students: "950+",
    successRate: "94%",
    rating: 4.8,
    tags: ["Civil Design", "3D Modeling", "Corridor Modeling", "Site Design"],
  },
  {
    title: "BIM for Infrastructure",
    serviceId: "bim-for-infrastructure",
    image:
      "https://wallpapercave.com/wp/wp8548012.jpg",
    duration: "4 Months",
    students: "2,500+",
    successRate: "97%",
    rating: 4.7,
    tags: ["CAD", "2D Drafting", "3D Modeling", "Visualization"],
  },
  
];

const Services = () => {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-header">
        <h2>Our Popular Courses</h2>
        <p>
          Explore our most advanced programs designed for future-ready professionals.
        </p>
      </div>

      <div className="courses-grid">
        {servicesData.map((service, index) => (
          <div className="course-card" key={index}>
            <div
              className="course-img"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            <div className="course-content">
              <h3>{service.title}</h3>
              <p className="course-meta">
                🕒 {service.duration} &nbsp; | &nbsp; 👥 {service.students}
              </p>
              <div className="course-tags">
                {service.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="course-footer">
                
                <Link to={`/service/${service.serviceId}`} className="explore-btn">
                  Explore More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
