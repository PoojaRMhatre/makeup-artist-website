import { motion } from "framer-motion";
import {
  FaCrown,
  FaHeart,
  FaStar,
  FaMagic,
  FaGem,
  FaFemale,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCrown />,
    title: "Bridal Makeup",
    desc: "Luxury bridal makeup for your special day.",
  },
  {
    icon: <FaHeart />,
    title: "Engagement Makeup",
    desc: "Elegant engagement and pre-wedding looks.",
  },
  {
    icon: <FaStar />,
    title: "Party Makeup",
    desc: "Perfect makeup for parties and events.",
  },
  {
    icon: <FaMagic />,
    title: "HD Makeup",
    desc: "High-definition makeup for photography.",
  },
  {
    icon: <FaGem />,
    title: "Airbrush Makeup",
    desc: "Flawless long-lasting airbrush finish.",
  },
  {
    icon: <FaFemale />,
    title: "Hair Styling",
    desc: "Professional bridal and party hairstyles.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#f8f5f2]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#8c6d89]">
            My Services
          </h2>

          <p className="mt-4 text-gray-600">
            Professional Makeup & Beauty Services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl text-[#8c6d89] flex justify-center mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>

              <button className="mt-6 bg-[#8c6d89] hover:bg-[#76556f] text-white px-6 py-2 rounded-full transition">
                Learn More
              </button>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}