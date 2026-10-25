import "../styles/Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully");
  };

  return (
    <section className="register">
      <div className="register-container">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="password"
            placeholder="Create Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Register
          </button>
        </form>

        <p>
          Already have an account? Login here.
        </p>
      </div>
    </section>
  );
}

export default Register;