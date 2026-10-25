import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>MediCare Hub</h2>
          <p>
            Providing quality healthcare with experienced doctors,
            modern facilities, and easy online appointment booking.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Doctors</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Kochi, Kerala, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@medicarehub.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MediCare Hub. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;