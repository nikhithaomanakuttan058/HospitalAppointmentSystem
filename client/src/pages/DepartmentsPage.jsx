import Navbar from "../components/Navbar";
import Departments from "../components/Departments";
import Footer from "../components/Footer";

function DepartmentsPage() {
  return (
    <>
      <Navbar />

      <main style={{ marginTop: "78px" }}>
        <Departments />
      </main>

      <Footer />
    </>
  );
}

export default DepartmentsPage;