import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Services />

        <Gallery />

        <Subscribe />

        <Testimonials />

        <Booking />
      </main>

      <Footer />
    </>
  );
}

export default App;