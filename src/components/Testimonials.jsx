import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Manisha Singh",
    review:
      "Absolutely loved my bridal makeup. It stayed flawless throughout the wedding and looked stunning in photographs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Simran",
    review:
      "Professional, punctual, and extremely talented. My engagement look was exactly what I dreamed of.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    name: "Alice Stauber",
    review:
      "Amazing makeup artistry and hair styling. I received so many compliments throughout the event.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#f8f5f2]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-[#8c6d89]">
            Client Reviews
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-[#8c6d89] mt-4">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-[#8c6d89]"
              />

              <div className="flex justify-center text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                "{item.review}"
              </p>

              <h3 className="font-semibold text-lg text-[#8c6d89]">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}