import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const servicesData = [
  {
    title: "Architectural Design",
    serviceId: "architectural-design",
    image:
      "https://images.prismic.io/travauxlib/4c6ff268-9350-4578-b460-fb4101c5ba99_etape-realisation-plans-maison.jpg?auto=compress,format&rect=0,0,1050,700&w=1050&h=700",
    duration: "4 Months",
    students: "1,200+",
    successRate: "96%",
    rating: 4.9,
    tags: ["Structural Analysis", "Steel Design", "Concrete Design", "Seismic"],
  },
  {
    title: "Interior Design",
    serviceId: "interior-design",
    image:
      "https://hdwallpaperim.com/wp-content/uploads/2017/08/25/121661-living_rooms-interiors-interior_design.jpg",
    duration: "4 Months",
    students: "950+",
    successRate: "94%",
    rating: 4.8,
    tags: ["Civil Design", "3D Modeling", "Corridor Modeling", "Site Design"],
  },
  {
    title: "3D Modeling",
    serviceId: "3d-modeling",
    image:
      "https://media.sketchfab.com/models/a245e5c6292047a2a4f93531f402ad81/thumbnails/01330f536ae44996bba1d13ced4d1f1b/9eae26f741af4d6a8d3099c6ef5d7b82.jpeg",
    duration: "4 Months",
    students: "2,500+",
    successRate: "97%",
    rating: 4.7,
    tags: ["CAD", "2D Drafting", "3D Modeling", "Visualization"],
  },
  {
    title: "Site Planning",
    serviceId: "site-planning",
    image:
      "https://urbanplanninglife.com/wp-content/uploads/2020/02/site-plan-2-scaled.jpg",
    duration: "4 Months",
    students: "800+",
    successRate: "95%",
    rating: 4.9,
    tags: ["Hydraulics", "Sewer Systems", "Modeling"],
  },
];

const Services = () => {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-header">
        <h2>Our Popular Services</h2>
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
                  Learn More →
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
