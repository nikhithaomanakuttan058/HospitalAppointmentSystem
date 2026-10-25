import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaHospital,
  FaUserMd,
  FaCalendarAlt,
  FaPhoneAlt,
  FaSignInAlt,
  FaUserPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">

        <div className="navbar-left">

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>

          <div className="logo">
            <h2>🏥 MediCare Hub</h2>
            <span>Caring for Life, Every Day</span>
          </div>

        </div>

        {/* Top Login and Register Buttons */}
        <div className="navbar-buttons">

          <Link to="/login" className="top-login-btn">
            <FaSignInAlt />
            <span>Login</span>
          </Link>

          <Link to="/register" className="top-register-btn">
            <FaUserPlus />
            <span>Register</span>
          </Link>

        </div>

      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "active" : ""}`}>

        {/* Close Button */}
        <div className="close-btn">
          <FaTimes onClick={() => setMenuOpen(false)} />
        </div>

        {/* Sidebar Header */}
        <div className="sidebar-header">

          <div className="hospital-logo">
            🏥
          </div>

          <h2>MediCare Hub</h2>

          <p>Caring for Life, Every Day</p>

          <input
            type="text"
            placeholder="Search..."
            className="search-box"
          />

        </div>

        {/* Navigation Links */}

        <Link to="/" onClick={() => setMenuOpen(false)}>
          <FaHome />
          <span>Home</span>
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          <FaInfoCircle />
          <span>About</span>
        </Link>

        <Link to="/services" onClick={() => setMenuOpen(false)}>
          <FaHospital />
          <span>Services</span>
        </Link>

        <Link to="/doctors" onClick={() => setMenuOpen(false)}>
          <FaUserMd />
          <span>Doctors</span>
        </Link>

        <Link to="/appointment" onClick={() => setMenuOpen(false)}>
          <FaCalendarAlt />
          <span>Appointment</span>
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <FaPhoneAlt />
          <span>Contact</span>
        </Link>

        <Link to="/login" onClick={() => setMenuOpen(false)}>
          <FaSignInAlt />
          <span>Login</span>
        </Link>

        <Link to="/register" onClick={() => setMenuOpen(false)}>
          <FaUserPlus />
          <span>Register</span>
        </Link>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">

          <h3>🚑 Emergency Care</h3>

          <p>+91 9876543210</p>

          <p>support@medicarehub.com</p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

        </div>

      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;