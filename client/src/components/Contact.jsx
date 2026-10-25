import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <p className="contact-text">
        We'd love to hear from you. Feel free to contact us for appointments,
        medical inquiries, or any assistance.
      </p>

      <div className="contact-container">
        <div className="contact-card">
          <h3>📍 Address</h3>
          <p>
            MediCare Hub Hospital<br />
            MG Road, Kochi<br />
            Kerala - 682016
          </p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
          <p>+91 98765 43211</p>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>support@medicarehub.com</p>
          <p>appointments@medicarehub.com</p>
        </div>

        <div className="contact-card">
          <h3>🕒 Working Hours</h3>
          <p>Monday - Saturday</p>
          <p>8:00 AM - 8:00 PM</p>
          <p>Emergency: 24/7</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;