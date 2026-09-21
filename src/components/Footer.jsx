export default function Footer() {
  return (
    <footer className="bg-[#8c6d89] text-white py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-2xl font-bold">
            Puja Pandey
          </h3>

          <p>poojarmhatre2019@gmail.com</p>
        </div>

        <div>
          <p>
            Pen, Raigad, Maharastra 402107
          </p>
        </div>

        <div>
          <h4 className="mb-3">
            Subscribe and get 10% off
          </h4>

          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 text-black"
          />
        </div>

      </div>

    </footer>
  );
}