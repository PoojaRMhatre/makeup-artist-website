import { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🔥 BOOK APPOINTMENT BUTTON CLICKED");
    console.log("📦 Appointment data:", formData);

    setLoading(true);
    setStatus("Sending appointment...");

    try {
      console.log("📡 Sending request to backend...");

      const response = await fetch(
        "http://localhost:5000/api/appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("📡 Server status:", response.status);

      const data = await response.json();

      console.log("📨 Server response:", data);

      if (response.ok) {
        setStatus(
          "✅ Appointment request sent successfully! We will contact you shortly."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });
      } else {
        setStatus(
          `❌ ${data.message || "Unable to send appointment."}`
        );
      }
    } catch (error) {
      console.error("❌ Appointment error:", error);

      setStatus(
        "❌ Unable to connect to the server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-24 bg-[#fff8fc]"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-[#8c6d89] mb-4">
          Book an Appointment
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Fill in your details and I’ll get back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c6d89]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c6d89]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 font-medium text-gray-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c6d89]"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block mb-2 font-medium text-gray-700"
              >
                Select Service
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#8c6d89]"
              >
                <option value="">Select a service</option>
                <option value="Bridal Makeup">Bridal Makeup</option>
                <option value="Party Makeup">Party Makeup</option>
                <option value="Engagement Makeup">
                  Engagement Makeup
                </option>
                <option value="Reception Makeup">
                  Reception Makeup
                </option>
                <option value="HD Makeup">HD Makeup</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block mb-2 font-medium text-gray-700"
              >
                Appointment Date
              </label>

              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c6d89]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700"
              >
                Message
              </label>

              <input
                id="message"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requirements?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8c6d89]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-[#8c6d89] hover:bg-[#765873] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition"
          >
            {loading ? "Sending..." : "Book Appointment"}
          </button>

          {status && (
            <p className="text-center mt-5 font-medium text-[#8c6d89]">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}