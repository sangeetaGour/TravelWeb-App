import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-white bg-gray-900">
      {/* 🔹 Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1543348750-466b55f32f16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* 🔹 Our Story */}
      <motion.section
        className="py-16 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Story</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Welcome to <span className="text-blue-400 font-semibold">TravelApp</span>! 
          We are passionate explorers who aim to make travel seamless and exciting.
          From breathtaking landscapes to cultural wonders, we bring the best destinations closer to you.
        </p>
      </motion.section>

      {/* 🔹 Mission & Vision */}
      <motion.section
        className="py-16 bg-gray-800 px-6 md:px-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Mission & Vision</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          🌍 <span className="text-yellow-400 font-semibold">Our mission</span> is to empower travelers with a user-friendly platform
          to discover and book unforgettable experiences.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          🚀 <span className="text-yellow-400 font-semibold">Our vision</span> is to become the leading travel companion,
          helping adventurers explore the world hassle-free.
        </p>
      </motion.section>

      {/* 🔹 Fun Facts Section */}
      <motion.section
        className="py-16 px-6 md:px-16 text-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-green-400">Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-2xl font-bold text-green-400">100+</h3>
            <p className="text-gray-300">Destinations Explored</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-2xl font-bold text-green-400">50K+</h3>
            <p className="text-gray-300">Happy Travelers</p>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-2xl font-bold text-green-400">24/7</h3>
            <p className="text-gray-300">Customer Support</p>
          </motion.div>
        </div>
      </motion.section>

      {/* 🔹 CTA Section */}
      <motion.section
        className="py-16 bg-blue-600 text-center text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
        <p className="text-lg mb-6">Join us on an unforgettable journey today!</p>
        <motion.button
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Start Your Adventure
        </motion.button>
      </motion.section>

     
    </div>
  );
};

export default About;
