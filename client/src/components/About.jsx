import "../styles/About.css";

function About() {
  return (
    <section className="about">

      {/* About */}
      <div className="about-content">

        <h2>About MediCare Hub</h2>

        <p>
          At <strong>MediCare Hub</strong>, we believe that healthcare is more
          than treating illnesses—it's about caring for people. Every patient
          who walks through our doors is welcomed with compassion, respect, and
          a genuine commitment to providing the highest quality medical care.
        </p>

        <p>
          Our experienced doctors, skilled nurses, and dedicated healthcare
          professionals work together to create a safe, comfortable, and
          supportive environment where every patient feels valued. Whether you
          need a routine health check-up, specialised treatment, or emergency
          care, we are here to support you every step of the way.
        </p>

      </div>

      {/* Our Journey */}

      <section className="history">

        <h2>Our Journey</h2>

        <p>
          MediCare Hub began with a simple dream—to make quality healthcare
          accessible to everyone. What started as a small healthcare centre has
          grown into a trusted multi-specialty hospital serving thousands of
          patients every year.
        </p>

        <p>
          Over the years, we have expanded our medical services, embraced modern
          healthcare technology, and built a team of highly qualified doctors
          and healthcare professionals. While our hospital has grown, one thing
          has remained unchanged—our commitment to caring for every patient like
          family.
        </p>

      </section>

      {/* Mission */}

      <section className="mission">

        <h2>Our Mission</h2>

        <p>
          Our mission is to provide healthcare that is compassionate,
          affordable, and accessible to everyone. We are committed to delivering
          quality medical care while ensuring every patient feels respected,
          supported, and cared for throughout their healthcare journey.
        </p>

      </section>

      {/* Vision */}

      <section className="vision">

        <h2>Our Vision</h2>

        <p>
          We aspire to become one of India's most trusted healthcare providers
          by combining medical excellence, advanced technology, and
          compassionate care to build a healthier and happier community.
        </p>

      </section>

      {/* Values */}

      <section className="values">

        <h2>The Values That Guide Us</h2>

        <div className="value-grid">

          <div className="value-card">
            <h3>❤️ Compassion</h3>
            <p>
              We treat every patient with kindness, empathy, and respect because
              every life matters.
            </p>
          </div>

          <div className="value-card">
            <h3>🏥 Excellence</h3>
            <p>
              We continuously improve our services to provide the highest
              standards of healthcare.
            </p>
          </div>

          <div className="value-card">
            <h3>🤝 Integrity</h3>
            <p>
              Honesty, transparency, and ethical medical practices are the
              foundation of everything we do.
            </p>
          </div>

          <div className="value-card">
            <h3>💡 Innovation</h3>
            <p>
              We embrace modern medical technology and innovative treatments to
              provide better care for every patient.
            </p>
          </div>

        </div>

      </section>

      {/* Why Trust Us */}

      <section className="trust">

        <h2>Why Families Trust MediCare Hub</h2>

        <div className="trust-grid">

          <div>
            👨‍⚕️
            <h3>Experienced Specialists</h3>
            <p>
              Highly qualified doctors with years of experience across multiple
              medical specialties.
            </p>
          </div>

          <div>
            🏥
            <h3>Modern Healthcare Facilities</h3>
            <p>
              Advanced medical equipment and comfortable facilities for the best
              patient care.
            </p>
          </div>

          <div>
            🚑
            <h3>24/7 Emergency Care</h3>
            <p>
              Our emergency department is always ready to provide immediate
              medical assistance.
            </p>
          </div>

          <div>
            💙
            <h3>Patient-Centred Care</h3>
            <p>
              Every treatment plan is personalised according to each patient's
              needs.
            </p>
          </div>

          <div>
            📅
            <h3>Easy Online Appointments</h3>
            <p>
              Book appointments quickly and conveniently from anywhere using our
              digital platform.
            </p>
          </div>

          <div>
            🌿
            <h3>Safe & Comfortable Environment</h3>
            <p>
              A clean, peaceful, and welcoming hospital designed for patient
              comfort and recovery.
            </p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="statistics">

        <h2>Making a Difference Every Day</h2>

        <p>
          Every number represents lives touched, families supported, and trust
          earned through years of dedicated healthcare service.
        </p>

        <div className="about-stats">

          <div className="stat-card">
            <h3>30+</h3>
            <p>Experienced Specialists</p>
          </div>

          <div className="stat-card">
            <h3>5000+</h3>
            <p>Happy Patients</p>
          </div>

          <div className="stat-card">
            <h3>15+</h3>
            <p>Medical Departments</p>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <p>Emergency Services</p>
          </div>

        </div>

      </section>

      {/* Timeline */}

      <section className="timeline">

        <h2>Our Journey Through the Years</h2>

        <div className="timeline-item">
          <h3>2012</h3>
          <p>
            MediCare Hub was founded with a vision to provide quality healthcare
            for everyone.
          </p>
        </div>

        <div className="timeline-item">
          <h3>2015</h3>
          <p>
            Expanded into a multi-specialty hospital with experienced medical
            professionals.
          </p>
        </div>

        <div className="timeline-item">
          <h3>2019</h3>
          <p>
            Introduced advanced diagnostic laboratories and modern medical
            technology.
          </p>
        </div>

        <div className="timeline-item">
          <h3>2023</h3>
          <p>
            Expanded emergency and critical care facilities to serve patients
            better.
          </p>
        </div>

        <div className="timeline-item">
          <h3>2026</h3>
          <p>
            Launched the MediCare Hub online appointment platform, making
            healthcare more accessible and convenient.
          </p>
        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>Your Health Is Our Greatest Priority</h2>

        <p>
          Thank you for trusting MediCare Hub with your healthcare needs.
          Whether you're visiting us for a routine consultation or specialised
          treatment, our team is always here to care for you with compassion,
          dedication, and excellence.
        </p>

        <button className="about-btn">
          Book an Appointment
        </button>

      </section>

    </section>
  );
}

export default About;