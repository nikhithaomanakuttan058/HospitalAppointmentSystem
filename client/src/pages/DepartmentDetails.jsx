import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, Link } from "react-router-dom";
import "../styles/DepartmentDetails.css";

import cardiology from "../assets/images/cardiology.jpg";
import neurology from "../assets/images/neurology.jpg";
import orthopedics from "../assets/images/orthopedics.jpg";
import pediatrics from "../assets/images/pediatrics.jpg";
import dermatology from "../assets/images/dermatology.jpg";
import gynecology from "../assets/images/gynecology.jpg";
import ophthalmology from "../assets/images/ophthalmology.jpg";
import ent from "../assets/images/ent.jpg";

const departments = {
  cardiology: {
    title: "Cardiology",
    image: cardiology,
    intro:
      "Our Cardiology Department provides comprehensive care for heart-related conditions using advanced technology and experienced specialists.",
    services: [
      "Heart Check-up",
      "ECG",
      "2D Echo",
      "Angiography",
      "Angioplasty",
      "Heart Surgery",
    ],
  },

  neurology: {
    title: "Neurology",
    image: neurology,
    intro:
      "Our Neurology Department offers expert diagnosis and treatment for disorders affecting the brain, spine, and nervous system.",
    services: [
      "Stroke Care",
      "Migraine Clinic",
      "Epilepsy Treatment",
      "Brain Tumor Care",
      "Spine Disorders",
      "Neuro Rehabilitation",
    ],
  },

  orthopedics: {
    title: "Orthopedics",
    image: orthopedics,
    intro:
      "Providing complete care for bones, joints, muscles, and sports injuries with modern surgical and rehabilitation facilities.",
    services: [
      "Joint Replacement",
      "Fracture Care",
      "Sports Injury",
      "Spine Care",
      "Arthroscopy",
      "Physiotherapy",
    ],
  },

  pediatrics: {
    title: "Pediatrics",
    image: pediatrics,
    intro:
      "Specialized healthcare services for infants, children, and adolescents in a child-friendly environment.",
    services: [
      "Vaccination",
      "Newborn Care",
      "Growth Monitoring",
      "Nutrition",
      "Child Development",
      "Emergency Pediatric Care",
    ],
  },

  dermatology: {
    title: "Dermatology",
    image: dermatology,
    intro:
      "Our Dermatology Department provides advanced diagnosis and treatment for skin, hair, and nail conditions.",
    services: [
      "Acne Treatment",
      "Skin Allergy",
      "Laser Therapy",
      "Cosmetic Dermatology",
      "Skin Biopsy",
      "Hair Treatment",
    ],
  },

  gynecology: {
    title: "Gynecology",
    image: gynecology,
    intro:
      "Comprehensive women's healthcare including pregnancy care and advanced gynecological treatments.",
    services: [
      "Pregnancy Care",
      "Normal Delivery",
      "High-Risk Pregnancy",
      "Infertility Clinic",
      "Women's Health Check-up",
      "Laparoscopic Surgery",
    ],
  },

  ophthalmology: {
    title: "Ophthalmology",
    image: ophthalmology,
    intro:
      "Complete eye care using advanced technology for diagnosis and treatment.",
    services: [
      "Eye Check-up",
      "Cataract Surgery",
      "LASIK",
      "Glaucoma Care",
      "Retina Clinic",
      "Pediatric Eye Care",
    ],
  },

  ent: {
    title: "ENT",
    image: ent,
    intro:
      "Expert care for ear, nose, and throat disorders with modern diagnostic facilities.",
    services: [
      "Hearing Test",
      "Sinus Treatment",
      "Tonsil Surgery",
      "Voice Disorders",
      "Nasal Endoscopy",
      "Ear Surgery",
    ],
  },
};

function DepartmentDetails() {
  const { department } = useParams();

  const dept = departments[department];

  if (!dept) {
    return (
      <>
        <Navbar />
        <main style={{ marginTop: "100px", textAlign: "center" }}>
          <h2>Department Not Found</h2>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="department-details">

        <div className="department-banner">

          <img
            src={dept.image}
            alt={dept.title}
          />

          <h1>{dept.title}</h1>

          <p>{dept.intro}</p>

        </div>

        <section className="services-section">

          <h2>Services We Provide</h2>

          <div className="service-grid">
            {dept.services.map((service, index) => (
              <div className="service-box" key={index}>
                ✔ {service}
              </div>
            ))}
          </div>

          <Link className="doctor-btn" to="/doctors">
            Find Doctors
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default DepartmentDetails;