import "../styles/HospitalStats.css";

function HospitalStats() {
  return (
    <section className="stats">
      <h2>Our Achievements</h2>

      <div className="stats-container">
        <div className="stat-box">
          <h3>👨‍⚕️</h3>
          <h1>30+</h1>
          <p>Specialist Doctors</p>
        </div>

        <div className="stat-box">
          <h3>🏥</h3>
          <h1>15+</h1>
          <p>Medical Departments</p>
        </div>

        <div className="stat-box">
          <h3>😊</h3>
          <h1>5000+</h1>
          <p>Happy Patients</p>
        </div>

        <div className="stat-box">
          <h3>🚑</h3>
          <h1>24/7</h1>
          <p>Emergency Care</p>
        </div>
      </div>
    </section>
  );
}

export default HospitalStats;