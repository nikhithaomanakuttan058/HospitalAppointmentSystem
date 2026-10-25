import "../styles/Appointment.css";

function Appointment() {
  return (
    <section className="appointment">
      <div className="appointment-container">
        <h2>Book an Appointment</h2>

        <form>
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          {/* Department */}
          <select>
            <option>Select Department</option>
            <option>General Medicine</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
            <option>Dermatology</option>
            <option>Gynecology & Obstetrics</option>
            <option>Ophthalmology</option>
            <option>ENT</option>
            <option>Dentistry</option>
            <option>Psychiatry</option>
            <option>Urology</option>
            <option>Pulmonology</option>
            <option>General Surgery</option>
            <option>Emergency Medicine</option>
          </select>

          {/* Doctor */}
          <select>
            <option>Select Doctor</option>

            <option>Dr. Anjali Nair - General Medicine</option>
            <option>Dr. Vivek Menon - General Medicine</option>

            <option>Dr. Rahul Menon - Cardiology</option>
            <option>Dr. Neha Kapoor - Cardiology</option>

            <option>Dr. Priya Sharma - Neurology</option>
            <option>Dr. Arjun Kumar - Neurology</option>

            <option>Dr. Rohit Verma - Orthopedics</option>
            <option>Dr. Sneha Iyer - Orthopedics</option>

            <option>Dr. Meera Thomas - Pediatrics</option>
            <option>Dr. Aditya Rao - Pediatrics</option>

            <option>Dr. Kavya Menon - Dermatology</option>
            <option>Dr. Nikhil Das - Dermatology</option>

            <option>Dr. Lakshmi Pillai - Gynecology & Obstetrics</option>
            <option>Dr. Aisha Khan - Gynecology & Obstetrics</option>

            <option>Dr. Joseph Mathew - Ophthalmology</option>
            <option>Dr. Anu George - Ophthalmology</option>

            <option>Dr. Suresh Babu - ENT</option>
            <option>Dr. Deepa Nair - ENT</option>

            <option>Dr. Rakesh Pillai - Dentistry</option>
            <option>Dr. Swathi Nair - Dentistry</option>

            <option>Dr. Arun Mathew - Psychiatry</option>
            <option>Dr. Reshma Varghese - Psychiatry</option>

            <option>Dr. Kiran Kumar - Urology</option>
            <option>Dr. Divya Menon - Urology</option>

            <option>Dr. Manu Krishnan - Pulmonology</option>
            <option>Dr. Gayathri S - Pulmonology</option>

            <option>Dr. Ashok Reddy - General Surgery</option>
            <option>Dr. Haritha Mohan - General Surgery</option>

            <option>Dr. Ajith Kumar - Emergency Medicine</option>
            <option>Dr. Sandra Joseph - Emergency Medicine</option>
          </select>

          <input type="date" />

          <input type="time" />

          <textarea
            rows="4"
            placeholder="Describe your health concern"
          ></textarea>

          <button type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

export default Appointment;