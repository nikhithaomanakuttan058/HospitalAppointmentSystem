import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DepartmentsPreview from "../components/DepartmentsPreview";
import HomeDoctors from "../components/HomeDoctors";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <DepartmentsPreview />

      <HomeDoctors />

      <WhyChooseUs />

      <Footer />
    </>
  );
}

export default Home;