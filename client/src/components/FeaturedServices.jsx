import "../styles/FeaturedServices.css";
import { Link } from "react-router-dom";

function FeaturedServices() {
  return (
    <section className="featured-services">
      <h2>Our Featured Services</h2>

      <p className="services-subtitle">
        We provide comprehensive healthcare services with experienced
        specialists and advanced medical facilities.
      </p>

      <div className="featured-container">
        <div className="featured-card">
          <h3>❤️ Cardiology</h3>
          <p>Expert diagnosis and treatment for heart-related conditions.</p>
        </div>

        <div className="featured-card">
          <h3>🧠 Neurology</h3>
          <p>Advanced care for brain, spine, and nervous system disorders.</p>
        </div>

        <div className="featured-card">
          <h3>🦴 Orthopedics</h3>
          <p>Comprehensive treatment for bones, joints, and muscles.</p>
        </div>

        <div className="featured-card">
          <h3>👶 Pediatrics</h3>
          <p>Compassionate healthcare services for infants and children.</p>
        </div>
      </div>

      <Link to="/services" className="view-services-btn">
        View All Services
      </Link>
    </section>
  );
}

export default FeaturedServices;