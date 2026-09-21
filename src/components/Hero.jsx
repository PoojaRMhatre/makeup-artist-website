import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/hero_banner.png"
        alt="Makeup Artist"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-bold"
        >
          Pooja Mhatre
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white uppercase tracking-[6px] mt-4 text-sm md:text-base"
        >
          A Cosmetologist's Quest To Perfection
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 mt-8 text-white text-2xl"
        >
          <a href="#">
            <FaInstagram className="hover:text-pink-300 transition duration-300" />
          </a>

          <a href="#">
            <FaFacebookF className="hover:text-blue-300 transition duration-300" />
          </a>

          <a href="#">
            <FaYoutube className="hover:text-red-400 transition duration-300" />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex gap-4 mt-10"
        >
          <a
            href="#booking"
            className="bg-[#8c6d89] hover:bg-[#745472] text-white px-8 py-3 rounded-full transition duration-300"
          >
            Book Appointment
          </a>

          <a
            href="#gallery"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition duration-300"
          >
            View Portfolio
          </a>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>

    </section>
  );
}