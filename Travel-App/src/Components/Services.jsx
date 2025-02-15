import React from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Flight Booking",
    description: "Book flights at the best prices worldwide with ease.",
    icon: "✈️",
  },
  {
    title: "Hotel Reservations",
    description: "Find and reserve hotels with top-notch amenities.",
    icon: "🏨",
  },
  {
    title: "Tour Packages",
    description: "Exclusive packages for exotic destinations worldwide.",
    icon: "🌍",
  },
  {
    title: "Car Rentals",
    description: "Rent luxury cars for a comfortable trip experience.",
    icon: "🚗",
  },
  {
    title: "Cruise Trips",
    description: "Enjoy luxurious cruise vacations around the globe.",
    icon: "🚢",
  },
  {
    title: "Travel Insurance",
    description: "Get covered with our reliable travel insurance plans.",
    icon: "🛡️",
  },
];

const Services = () => {
  return (
    <div className="text-white bg-gray-900 min-h-screen">
      {/* 🔹 Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563388705-c240527afb77?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* 🔹 Services List */}
      <motion.section
        className="py-16 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-400">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-2xl font-bold mt-4 text-yellow-400">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🔹 Call to Action */}
      <motion.section
        className="py-16 bg-blue-600 text-center text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Plan Your Dream Trip Today!</h2>
        <p className="text-lg mb-6">Contact us to get started with your next adventure.</p>
        <motion.button
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* 🔹 Footer */}
     
    </div>
  );
};

export default Services;
