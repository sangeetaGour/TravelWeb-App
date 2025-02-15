import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully with ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-blue-600 text-white py-12 px-6 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="mt-2 text-lg">Get the latest travel deals and updates.</p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-md text-black w-full md:w-96 outline-none"
          />
          <button type="submit" className="bg-black px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
