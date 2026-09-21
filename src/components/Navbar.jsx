import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="flex items-center">
  <img
    src="/images/Pooja Mhatre logo.png"
    alt="Pooja Mhatre Makeup Artist"
    className="h-14 md:h-16 w-auto object-contain"
  />
</a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            "Home",
            "About",
            "Services",
            "Gallery",
            "Testimonials",
            "Booking",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition duration-300 ${
                scroll
                  ? "text-gray-800 hover:text-[#8c6d89]"
                  : "text-white hover:text-[#D4A373]"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Icon */}
        <button
          className={`md:hidden text-2xl ${
            scroll ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center py-6 gap-5">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>

            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>

            <a href="#booking" onClick={() => setMenuOpen(false)}>
              Booking
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}