import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Hero = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626606076701-cf4ae64b2b03?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center brightness-75"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">Discover Your Next Adventure</h1>
        <p className="mt-4 text-lg md:text-xl">Find the best travel destinations for your dream vacation.</p>

        {/* Search Bar */}
        <div className="mt-6 bg-white/10 p-4 rounded-lg  shadow-md flex flex-col md:flex-row gap-4 items-center  ">
          {/* Location Input */}
         
          <input
            type="text"
            placeholder="Enter location"
            className="p-3 rounded-md w-full md:w-auto bg-white text-black outline-none"
          />

          {/* Date Picker */}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="p-3 rounded-md bg-white text-black outline-none w-full md:w-auto"
          />

          {/* Category Dropdown */}
          <select className="p-3 rounded-md w-full md:w-auto bg-white text-black outline-none">
            <option value="">Select Category</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="city">City</option>
          </select>
        </div>
        <div> 
          <button className="bg-blue-600 mt-5 hover:bg-blue-700 text-white p-3 rounded-md w-full md:w-auto">
            Search
          </button>
          </div>
      </div>
    </div>
  );
};

export default Hero;
