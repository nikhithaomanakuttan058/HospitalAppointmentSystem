import { Link } from "react-router-dom";
import "../styles/HomeDoctors.css";

const doctors = [
  {
    name: "Dr. Anjali Nair",
    specialization: "General Medicine",
    experience: "12 Years",
    rating: "4.9",
  },
  {
    name: "Dr. Rahul Menon",
    specialization: "Cardiology",
    experience: "15 Years",
    rating: "4.9",
  },
  {
    name: "Dr. Priya Sharma",
    specialization: "Neurology",
    experience: "14 Years",
    rating: "4.8",
  },
  {
    name: "Dr. Rohit Verma",
    specialization: "Orthopedics",
    experience: "13 Years",
    rating: "4.8",
  },
];

function HomeDoctors() {
  return (
    <section className="home-doctors">

      <h2>Meet Our Medical Specialists</h2>

      <p>
        Our experienced team of doctors is committed to providing compassionate,
        high-quality healthcare across a wide range of medical specialties.
      </p>

      <div className="home-doctor-grid">
        {doctors.map((doctor, index) => (
          <div className="home-doctor-card" key={index}>

            <h3>{doctor.name}</h3>

            <h4>{doctor.specialization}</h4>

            <p>⭐ {doctor.rating}</p>

            <p>{doctor.experience} Experience</p>

          </div>
        ))}
      </div>

      <Link to="/doctors" className="view-all-btn">
        View All Doctors →
      </Link>

    </section>
  );
}

export default HomeDoctors;