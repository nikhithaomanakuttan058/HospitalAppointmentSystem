import "../styles/Doctors.css";
import DoctorCard from "./DoctorCard";
import { useState } from "react";

// ===========================
// DOCTOR IMAGES
// ===========================

import drAnjaliNair from "../assets/images/doctors/Dr Anjali Nair.jpg";
import drVivekMenon from "../assets/images/doctors/Dr vivek Menon.jpg";
import drRahulMenon from "../assets/images/doctors/Dr Rahul Menon.jpg";
import drNehaKapoor from "../assets/images/doctors/Dr Neha Kapoor.jpg";

import drAdityaRao from "../assets/images/doctors/Dr. Aditya Rao.jpg";
import drAishaKhan from "../assets/images/doctors/Dr. Aisha Khan.jpg";
import drArjunKumar from "../assets/images/doctors/Dr. Arjun Kumar.jpg";
import drJosephMathew from "../assets/images/doctors/Dr. Joseph Mathew.jpg";
import drKavyaMenon from "../assets/images/doctors/Dr. Kavya Menon.jpg";
import drLakshmiPillai from "../assets/images/doctors/Dr. Lakshmi Pillai.jpg";
import drMeeraThomas from "../assets/images/doctors/Dr. Meera Thomas.jpg";
import drNikhilDas from "../assets/images/doctors/Dr. Nikhil Das.jpg";
import drPriyaSharma from "../assets/images/doctors/Dr. Priya Sharma.jpg";
import drRohitVerma from "../assets/images/doctors/Dr. Rohit Verma.jpg";
import drSnehaIyer from "../assets/images/doctors/Dr. Sneha Iyer.jpg";


// ===========================
// DOCTORS DATA
// ===========================

const doctors = [
  {
    name: "Dr. Anjali Nair",
    image: drAnjaliNair,
    specialization: "General Medicine",
    rating: 4.9,
    experience: 12,
    phone: "+91 9876543210",
    email: "anjali@medicarehub.com",
    status: "Available Today",
  },

  {
    name: "Dr. Vivek Menon",
    image: drVivekMenon,
    specialization: "General Medicine",
    rating: 4.8,
    experience: 10,
    phone: "+91 9876543211",
    email: "vivek@medicarehub.com",
    status: "Available Today",
  },

  {
    name: "Dr. Rahul Menon",
    image: drRahulMenon,
    specialization: "Cardiology",
    rating: 4.9,
    experience: 15,
    phone: "+91 9876543212",
    email: "rahul@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Neha Kapoor",
    image: drNehaKapoor,
    specialization: "Cardiology",
    rating: 4.8,
    experience: 11,
    phone: "+91 9876543213",
    email: "neha@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Priya Sharma",
    image: drPriyaSharma,
    specialization: "Neurology",
    rating: 4.9,
    experience: 14,
    phone: "+91 9876543214",
    email: "priya@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Arjun Kumar",
    image: drArjunKumar,
    specialization: "Neurology",
    rating: 4.8,
    experience: 12,
    phone: "+91 9876543215",
    email: "arjun@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Rohit Verma",
    image: drRohitVerma,
    specialization: "Orthopedics",
    rating: 4.8,
    experience: 13,
    phone: "+91 9876543216",
    email: "rohit@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Sneha Iyer",
    image: drSnehaIyer,
    specialization: "Orthopedics",
    rating: 4.9,
    experience: 10,
    phone: "+91 9876543217",
    email: "sneha@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Meera Thomas",
    image: drMeeraThomas,
    specialization: "Pediatrics",
    rating: 4.9,
    experience: 11,
    phone: "+91 9876543218",
    email: "meera@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Aditya Rao",
    image: drAdityaRao,
    specialization: "Pediatrics",
    rating: 4.8,
    experience: 9,
    phone: "+91 9876543219",
    email: "aditya@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Kavya Menon",
    image: drKavyaMenon,
    specialization: "Dermatology",
    rating: 4.8,
    experience: 10,
    phone: "+91 9876543220",
    email: "kavya@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Nikhil Das",
    image: drNikhilDas,
    specialization: "Dermatology",
    rating: 4.7,
    experience: 8,
    phone: "+91 9876543221",
    email: "nikhil@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Lakshmi Pillai",
    image: drLakshmiPillai,
    specialization: "Gynecology & Obstetrics",
    rating: 4.9,
    experience: 16,
    phone: "+91 9876543222",
    email: "lakshmi@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Aisha Khan",
    image: drAishaKhan,
    specialization: "Gynecology & Obstetrics",
    rating: 4.8,
    experience: 12,
    phone: "+91 9876543223",
    email: "aisha@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Joseph Mathew",
    image: drJosephMathew,
    specialization: "Ophthalmology",
    rating: 4.8,
    experience: 14,
    phone: "+91 9876543224",
    email: "joseph@medicarehub.com",
    status: "Available",
  },

  // ===========================
  // NO IMAGE YET
  // ===========================

  {
    name: "Dr. Anu George",
    specialization: "Ophthalmology",
    rating: 4.7,
    experience: 10,
    phone: "+91 9876543225",
    email: "anu@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Suresh Babu",
    specialization: "ENT",
    rating: 4.8,
    experience: 13,
    phone: "+91 9876543226",
    email: "suresh@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Deepa Nair",
    specialization: "ENT",
    rating: 4.9,
    experience: 11,
    phone: "+91 9876543227",
    email: "deepa@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Rakesh Pillai",
    specialization: "Dentistry",
    rating: 4.8,
    experience: 10,
    phone: "+91 9876543228",
    email: "rakesh@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Swathi Nair",
    specialization: "Dentistry",
    rating: 4.9,
    experience: 9,
    phone: "+91 9876543229",
    email: "swathi@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Arun Mathew",
    specialization: "Psychiatry",
    rating: 4.8,
    experience: 12,
    phone: "+91 9876543230",
    email: "arun@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Reshma Varghese",
    specialization: "Psychiatry",
    rating: 4.7,
    experience: 11,
    phone: "+91 9876543231",
    email: "reshma@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Kiran Kumar",
    specialization: "Urology",
    rating: 4.9,
    experience: 15,
    phone: "+91 9876543232",
    email: "kiran@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Divya Menon",
    specialization: "Urology",
    rating: 4.8,
    experience: 10,
    phone: "+91 9876543233",
    email: "divya@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Manu Krishnan",
    specialization: "Pulmonology",
    rating: 4.9,
    experience: 14,
    phone: "+91 9876543234",
    email: "manu@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Gayathri S",
    specialization: "Pulmonology",
    rating: 4.8,
    experience: 11,
    phone: "+91 9876543235",
    email: "gayathri@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Ashok Reddy",
    specialization: "General Surgery",
    rating: 4.8,
    experience: 16,
    phone: "+91 9876543236",
    email: "ashok@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Haritha Mohan",
    specialization: "General Surgery",
    rating: 4.9,
    experience: 13,
    phone: "+91 9876543237",
    email: "haritha@medicarehub.com",
    status: "Available",
  },

  {
    name: "Dr. Ajith Kumar",
    specialization: "Emergency Medicine",
    rating: 4.9,
    experience: 15,
    phone: "+91 9876543238",
    email: "ajith@medicarehub.com",
    status: "Available 24/7",
  },

  {
    name: "Dr. Sandra Joseph",
    specialization: "Emergency Medicine",
    rating: 4.8,
    experience: 12,
    phone: "+91 9876543239",
    email: "sandra@medicarehub.com",
    status: "Available 24/7",
  },
];


// ===========================
// DOCTORS COMPONENT
// ===========================

function Doctors() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) => {
    const query = search.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(query) ||
      doctor.specialization.toLowerCase().includes(query)
    );
  });

  return (
    <section className="doctors">

      <div className="doctors-header">
        <h2>Our Doctors</h2>

        <input
          type="text"
          placeholder="Search doctor or specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="doctor-search"
        />
      </div>

      <p className="doctor-subtitle">
        Meet our experienced and dedicated medical professionals committed to
        providing exceptional healthcare across various medical specialties.
      </p>

      <div className="doctor-container">

        {filteredDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            image={doctor.image}
            specialization={doctor.specialization}
            rating={doctor.rating}
            experience={doctor.experience}
            phone={doctor.phone}
            email={doctor.email}
            status={doctor.status}
          />
        ))}

      </div>

    </section>
  );
}

export default Doctors;