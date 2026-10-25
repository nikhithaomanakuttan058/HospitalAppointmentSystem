function DoctorCard({
  name,
  specialization,
  rating,
  experience,
  phone,
  email,
  status,
  image,
}) {
  return (
    <div className="doctor-card">

      {image ? (
        <img
          src={image}
          alt={name}
          className="doctor-image"
        />
      ) : (
        <div className="doctor-image-placeholder">
          👨‍⚕️
        </div>
      )}

      <h3>{name}</h3>

      <p>
        <strong>Specialization:</strong> {specialization}
      </p>

      <p>⭐ {rating}</p>

      <p>
        <strong>Experience:</strong> {experience} Years
      </p>

      <p>
        <strong>Phone:</strong> {phone}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p className="status">{status}</p>

      <button>Book Appointment</button>

    </div>
  );
}

export default DoctorCard;