import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appointment from "./pages/Appointment";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetails from "./pages/DepartmentDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/appointment" element={<Appointment />} />

      {/* Departments */}
      <Route path="/departments" element={<DepartmentsPage />} />

      {/* Department Details */}
      <Route
        path="/departments/:department"
        element={<DepartmentDetails />}
      />
    </Routes>
  );
}

export default App;