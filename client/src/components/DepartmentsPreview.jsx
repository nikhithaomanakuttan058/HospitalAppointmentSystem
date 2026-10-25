import "../styles/DepartmentsPreview.css";
import { Link } from "react-router-dom";

import cardiology from "../assets/images/cardiology.jpg";
import neurology from "../assets/images/neurology.jpg";
import orthopedics from "../assets/images/orthopedics.jpg";
import pediatrics from "../assets/images/pediatrics.jpg";
import dermatology from "../assets/images/dermatology.jpg";

const departments = [
  {
    image: cardiology,
    title: "Cardiology",
    description: "Advanced heart care with experienced cardiologists.",
  },
  {
    image: neurology,
    title: "Neurology",
    description: "Expert care for brain and nervous system disorders.",
  },
  {
    image: orthopedics,
    title: "Orthopedics",
    description: "Specialized treatment for bones, joints and muscles.",
  },
  {
    image: pediatrics,
    title: "Pediatrics",
    description: "Complete healthcare services for infants and children.",
  },
  {
    image: dermatology,
    title: "Dermatology",
    description: "Advanced skin, hair and nail care treatments.",
  },
];

function DepartmentsPreview() {
  return (
    <section className="departments-preview">
      <h2>Our Medical Departments</h2>

      <p>
        Explore some of our most sought-after medical specialties. Our expert
        doctors and advanced facilities ensure the highest quality healthcare
        for every patient.
      </p>

      <div className="preview-grid">
        {departments.map((dept, index) => (
          <div className="preview-card" key={index}>
            <img
              src={dept.image}
              alt={dept.title}
              className="preview-image"
            />

            <h3>{dept.title}</h3>

            <p>{dept.description}</p>

            <div className="preview-buttons">
              <Link to="/doctors" className="find-btn">
                Find Doctors
              </Link>

              <Link to="/departments" className="learn-btn">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrapper">
        <Link to="/departments" className="view-all-departments">
          View All Departments →
        </Link>
      </div>
    </section>
  );
}

export default DepartmentsPreview;