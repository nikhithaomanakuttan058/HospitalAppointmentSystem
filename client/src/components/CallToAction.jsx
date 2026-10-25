import "../styles/CallToAction.css";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Ready to Take Care of Your Health?</h2>

        <p>
          Schedule an appointment with our experienced doctors and receive
          quality healthcare tailored to your needs.
        </p>

        <Link to="/appointment" className="cta-btn">
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;