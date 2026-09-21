import { motion } from "framer-motion";

export default function Subscribe() {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/07/07/78/28/360_F_707782838_jLH2yNM5hZWrFPc7aQsTqmPLKvRPJs9R.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
      >
        <span className="uppercase tracking-[4px] text-[#D4A373]">
          Exclusive Beauty Updates
        </span>

        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
          Subscribe & Get 10% Off
        </h2>

        <p className="text-lg text-gray-200 mb-10">
          Join our beauty community and receive bridal makeup tips,
          special offers, and exclusive updates.
        </p>

        <form className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-full w-full md:w-96 text-black outline-none"
          />

          <button
            type="submit"
            className="bg-[#8c6d89] hover:bg-[#745472] px-8 py-4 rounded-full font-medium transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </motion.div>
    </section>
  );
}