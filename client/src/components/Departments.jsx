import "../styles/Departments.css";
import { Link } from "react-router-dom";

import cardiology from "../assets/images/cardiology.jpg";
import neurology from "../assets/images/neurology.jpg";
import orthopedics from "../assets/images/orthopedics.jpg";
import pediatrics from "../assets/images/pediatrics.jpg";
import dermatology from "../assets/images/dermatology.jpg";
import gynecology from "../assets/images/gynecology.jpg";
import ophthalmology from "../assets/images/ophthalmology.jpg";
import ent from "../assets/images/ent.jpg";

const departments = [
  {
    image: cardiology,
    title: "Cardiology",
    description:
      "Advanced diagnosis and treatment for heart diseases with experienced cardiologists.",
    slug: "cardiology",
  },
  {
    image: neurology,
    title: "Neurology",
    description:
      "Expert care for brain, spine and nervous system disorders.",
    slug: "neurology",
  },
  {
    image: orthopedics,
    title: "Orthopedics",
    description:
      "Comprehensive treatment for bones, joints, muscles and fractures.",
    slug: "orthopedics",
  },
  {
    image: pediatrics,
    title: "Pediatrics",
    description:
      "Complete healthcare services for infants and children.",
    slug: "pediatrics",
  },
  {
    image: dermatology,
    title: "Dermatology",
    description:
      "Advanced treatment for skin, hair and nail conditions.",
    slug: "dermatology",
  },
  {
    image: gynecology,
    title: "Gynecology",
    description:
      "Complete women's healthcare and maternity services.",
    slug: "gynecology",
  },
  {
    image: ophthalmology,
    title: "Ophthalmology",
    description:
      "Advanced eye care and vision treatment.",
    slug: "ophthalmology",
  },
  {
    image: ent,
    title: "ENT",
    description:
      "Diagnosis and treatment of ear, nose and throat disorders.",
    slug: "ent",
  },
];

function Departments() {
  return (
    <section className="departments">
      <h2>Our Medical Departments</h2>

      <p>
        Explore our specialized medical departments offering expert care,
        modern technology and experienced doctors.
      </p>

      <div className="department-grid">
        {departments.map((dept, index) => (
          <div className="department-card" key={index}>
            <img
              src={dept.image}
              alt={dept.title}
              className="department-image"
            />

            <h3>{dept.title}</h3>

            <p>{dept.description}</p>

            <div className="department-buttons">
              <Link to="/doctors" className="find-btn">
                Find Doctors
              </Link>

              <Link
                to={`/departments/${dept.slug}`}
                className="learn-btn"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Departments;