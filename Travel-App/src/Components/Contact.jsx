import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <div className="text-white bg-gray-900 min-h-screen">
      {/* 🔹 Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <motion.h1
            className="text-5xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* 🔹 Contact Form Section */}
      <motion.section
        className="py-16 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          Have questions or need assistance? Feel free to reach out!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label className="block text-left text-gray-300 font-semibold mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-left">{errors.name.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-300 font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-left">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-300 font-semibold mb-2">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 h-32"
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-left">{errors.message.message}</p>}
          </div>

          <motion.button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      {/* 🔹 Map Section */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Find Us Here</h2>
        <p className="text-lg text-gray-300 mb-6">Visit our office or reach out anytime.</p>
        <iframe
          title="Google Map"
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.95373531567814!3d-37.81627974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773a5b3032330!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1646047777361!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.section>

   
     
    </div>
  );
};

export default Contact;
