import { useState } from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const handleAppointment = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setShowPopup(true);
      return;
    }

    navigate("/appointment");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Health, Our Priority</h1>

        <p>
          <strong>Welcome to MediCare Hub.</strong> We are dedicated to
          delivering exceptional healthcare through experienced doctors,
          advanced medical technology, and patient-centred care. Easily book
          appointments online and access trusted medical services for you and
          your family.
        </p>

        <div className="hero-highlights">
          <div>
            👨‍⚕️ <strong>30+</strong>
            <br />
            Experienced Specialists
          </div>

          <div>
            🏥 <strong>15+</strong>
            <br />
            Medical Departments
          </div>

          <div>
            🚑 <strong>24/7</strong>
            <br />
            Emergency & Critical Care
          </div>

          <div>
            😊 <strong>5000+</strong>
            <br />
            Satisfied Patients
          </div>
        </div>

        <button className="hero-btn" onClick={handleAppointment}>
          Book an Appointment
        </button>
      </div>

      {/* Login Popup */}

      {showPopup && (
        <div className="popup-overlay">
          <div className="login-popup">

            <h2>🔒 Login Required</h2>

            <p>
              You are not logged in or registered.
              <br />
              Please login or create an account before booking an appointment.
            </p>

            <div className="popup-buttons">

              <button
                className="login-btn"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

              <button
                className="register-btn"
                onClick={() => navigate("/register")}
              >
                Register
              </button>

              <button
                className="cancel-btn"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;