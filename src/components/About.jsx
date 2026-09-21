import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#f8f5f2]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://media.istockphoto.com/id/687244776/photo/makeup-artist-applying-eyeshadow-on-a-girl.jpg?s=612x612&w=0&k=20&c=QkFL3oe-poYi4p1ZaboIOVie_ycRz0fTJG9Ex5LpNoQ="
              alt="Makeup Artist"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="uppercase tracking-[4px] text-[#8c6d89] text-sm">
              Professional Makeup Artist
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-[#8c6d89] mt-4 mb-6">
              About Me
            </h2>

            <h4 className="uppercase tracking-[4px] mb-4 text-gray-700">
              PUJA PANDEY
            </h4>

            <p className="text-gray-600 leading-8">
              Puja Pandey Makeup Artist & Hair Styling specialist
              serving Mumbai, Kolkata and Bihar. Expert in
              Bridal Makeup, Party Makeup, Fashion Shoots,
              Editorial Makeup and Luxury Beauty Services.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-[#8c6d89]">
                  500+
                </h3>
                <p className="text-gray-600">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#8c6d89]">
                  10+
                </h3>
                <p className="text-gray-600">
                  Years Experience
                </p>
              </div>

            </div>

            <button className="mt-10 bg-[#8c6d89] hover:bg-[#76556f] text-white px-8 py-3 rounded-full transition">
              Learn More
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn0.weddingwire.in/vendor/2296/3_2/960/jpeg/4d5ceb17-8a12-4ef6-987e-9fc2ca32294e_15_82296-159083961450264.jpeg"
              alt="Bridal Makeup"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}