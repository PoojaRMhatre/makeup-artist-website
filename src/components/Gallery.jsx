import { motion } from "framer-motion";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLQtNZFed3V-R-Dfwf55L6dXbQA1fmWtAaD__xZsyqw&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDuUa5VFdy0CQ8VTxWapxCBnMN28njhNL_jKWp_BJXg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkHjRblrS7rrzgPX6GxJi9ymeMGNxsJL9hnFJn4Ieng&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-xtO57u281-4WtGzwwiIKB7CNvMIzu8bROZkeQgR0A&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWjXBa5i9RYsvpVSS6eGp-FJOWvlcpilMqw6E9LZjx4ytY6KyuR8xEEM&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrgl0FjUhYVqIDkoAOvyHGTKVZ0uuIpur0imVTjJNJQ&s=10",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-[#f8f5f2]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#8c6d89]">
            Portfolio Gallery
          </h2>

          <p className="mt-4 text-gray-600">
            Bridal • Engagement • Reception • Party Makeup
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-96 object-cover transition duration-500"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}