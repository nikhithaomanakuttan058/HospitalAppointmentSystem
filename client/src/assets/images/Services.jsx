import { useState } from "react";
import "../styles/Services.css";
import ServiceCard from "./ServiceCard";

// Doctor Images
import doc1 from "../assets/images/doc1.jpg";
import doc2 from "../assets/images/doc2.jpg";
import doc3 from "../assets/images/doc3.jpg";
import doc4 from "../assets/images/doc4.jpg";

// Facility Images
import icu from "../assets/images/icu.jpg";
import ot from "../assets/images/ot.jpg";
import lab from "../assets/images/lab.jpg";
import emergency from "../assets/images/emergency.jpg";

function Services() {
  const [page, setPage] = useState(1);

  const services = [
    {
      icon: "🩺",
      title: "General Medicine",
      description:
        "Comprehensive diagnosis and treatment for common illnesses.",
    },
    {
      icon: "❤️",
      title: "Cardiology",
      description:
        "Expert heart care and cardiovascular treatments.",
    },
    {
      icon: "🧠",
      title: "Neurology",
      description:
        "Specialized care for brain and nervous system disorders.",
    },
    {
      icon: "🦴",
      title: "Orthopedics",
      description:
        "Treatment for bones, joints, muscles, and fractures.",
    },
    {
      icon: "👶",
      title: "Pediatrics",
      description:
        "Complete healthcare services for infants and children.",
    },
    {
      icon: "🌿",
      title: "Dermatology",
      description:
        "Diagnosis and treatment for skin, hair, and nail conditions.",
    },
    {
      icon: "🤰",
      title: "Gynecology & Obstetrics",
      description:
        "Women's healthcare and maternity services.",
    },
    {
      icon: "👁️",
      title: "Ophthalmology",
      description:
        "Comprehensive eye care and vision treatments.",
    },
    {
      icon: "👂",
      title: "ENT",
      description:
        "Treatment for ear, nose, and throat disorders.",
    },
    {
      icon: "🦷",
      title: "Dentistry",
      description:
        "Dental care, oral surgery, and cosmetic dentistry.",
    },
    {
      icon: "🧘",
      title: "Psychiatry",
      description:
        "Mental health counselling and psychiatric care.",
    },
    {
      icon: "💧",
      title: "Urology",
      description:
        "Diagnosis and treatment of urinary tract disorders.",
    },
    {
      icon: "🫁",
      title: "Pulmonology",
      description:
        "Expert care for lung and respiratory diseases.",
    },
    {
      icon: "🔪",
      title: "General Surgery",
      description:
        "Advanced surgical procedures with expert surgeons.",
    },
    {
      icon: "🚑",
      title: "Emergency Medicine",
      description:
        "24/7 emergency care for critical medical situations.",
    },
  ];

  return (
    <>
      {page === 1 && (
        <section className="services">
          <h2>Our Medical Departments</h2>

          <p className="services-subtitle">
            We provide comprehensive healthcare services through experienced
            specialists, advanced medical technology, and compassionate patient
            care across a wide range of medical departments.
          </p>

          <div className="services-container">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>
      )}

      {page === 2 && (
        <section className="doctor-gallery">
          <h2>Meet Our Medical Specialists</h2>

          <p>
            Our experienced team of doctors is dedicated to delivering
            compassionate, high-quality healthcare with expertise and
            professionalism.
          </p>

          <div className="gallery-grid">
            <img src={doc1} alt="Doctor 1" />
            <img src={doc2} alt="Doctor 2" />
            <img src={doc3} alt="Doctor 3" />
            <img src={doc4} alt="Doctor 4" />
          </div>
        </section>
      )}

            {page === 3 && (
        <section className="facilities">
          <h2>Advanced Medical Facilities</h2>

          <p>
            MediCare Hub is equipped with state-of-the-art infrastructure,
            advanced medical technology, and modern healthcare facilities to
            provide the highest standard of patient care.
          </p>

          <div className="facility-grid">

            <div className="facility-card">
              <img src={icu} alt="ICU" />
              <h3>Intensive Care Unit</h3>
              <p>
                Modern ICU equipped with advanced monitoring systems and
                24/7 critical care specialists.
              </p>
            </div>

            <div className="facility-card">
              <img src={ot} alt="Operation Theatre" />
              <h3>Operation Theatre</h3>
              <p>
                Fully equipped modular operation theatres designed for
                safe and advanced surgical procedures.
              </p>
            </div>

            <div className="facility-card">
              <img src={lab} alt="Diagnostic Laboratory" />
              <h3>Diagnostic Laboratory</h3>
              <p>
                Accurate and fast diagnostic testing using the latest
                laboratory equipment and technology.
              </p>
            </div>

            <div className="facility-card">
              <img src={emergency} alt="Emergency Care" />
              <h3>24/7 Emergency Care</h3>
              <p>
                Round-the-clock emergency services with rapid response
                and expert emergency physicians.
              </p>
            </div>

          </div>
        </section>
      )}

      <div className="service-navigation">

        {page > 1 && (
          <button
            className="prev-btn"
            onClick={() => setPage(page - 1)}
          >
            ← Previous
          </button>
        )}

        {page < 3 && (
          <button
            className="next-btn"
            onClick={() => setPage(page + 1)}
          >
            Next →
          </button>
        )}

      </div>
    </>
  );
}

export default Services;