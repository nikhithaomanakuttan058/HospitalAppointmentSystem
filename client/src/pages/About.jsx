import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <main style={{ marginTop: "78px" }}>
        <About />
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;