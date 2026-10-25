import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful");
    navigate("/doctors");
  };

  return (
    <section className="login">
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? Register here.
        </p>
      </div>
    </section>
  );
}

export default Login;