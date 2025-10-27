import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const courseData = [
  {
    title: "Architectural Design",
    courseId: "architectural-design",
    image:
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "10,000",
    duration: "4 Months",
    students: "1,200+",
    successRate: "96%",
    rating: 4.9,
    tags: ["Structural Analysis", "Steel Design", "Concrete Design", "Seismic"],
  },
  {
    title: "Interior Design",
    courseId: "interior-design",
    image:
      "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "10,000",
    duration: "8 Months",
    students: "950+",
    successRate: "94%",
    rating: 4.8,
    tags: ["Civil Design", "3D Modeling", "Corridor Modeling", "Site Design"],
  },
  {
    title: "3D Modeling",
    courseId: "3d-modeling",
    image:
      "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "10,000",
    duration: "4 Months",
    students: "2,500+",
    successRate: "97%",
    rating: 4.7,
    tags: ["CAD", "2D Drafting", "3D Modeling", "Visualization"],
  },
  {
    title: "Site Planning",
    courseId: "site-planning",
    image:
      "https://images.pexels.com/photos/4392033/pexels-photo-4392033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "10,000",
    duration: "7 Months",
    students: "800+",
    successRate: "95%",
    rating: 4.9,
    tags: ["Hydraulics", "Sewer Systems", "Modeling"],
  },
];

const Courses = () => {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-header">
        <h2>Our Popular Courses</h2>
        <p>
          Explore our most advanced programs designed for future-ready professionals.
        </p>
      </div>

      <div className="courses-grid">
        {courseData.map((course, index) => (
          <div className="course-card" key={index}>
            <div
              className="course-img"
              style={{ backgroundImage: `url(${course.image})` }}
            ></div>

            <div className="course-content">
              <h3>{course.title}</h3>
              <p className="course-meta">
                🕒 {course.duration} &nbsp; | &nbsp; 👥 {course.students}
              </p>
              <div className="course-tags">
                {course.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="course-footer">
                <span className="course-price">₹{course.price}</span>
                <Link to={`/course/${course.courseId}`} className="explore-btn">
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

export default Courses;
