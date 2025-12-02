import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-5xl md:text-8xl font-bold text-gray-400 text-center">
        Dino's Barber Shop
      </h1>
      <h3 className="text-lg md:text-xl mt-2 text-gray-400 mb-8 text-center">
        A home you can trust with your hair
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          to="/services"
          className="px-8 py-3 bg-gray-400/20 backdrop-blur-md border border-gray-400/30 text-gray-300 font-semibold rounded-lg hover:bg-gray-400/30 transition-all duration-200 text-center"
        >
          View Services
        </Link>
        <Link
          to="/booking"
          className="px-8 py-3 bg-gray-400 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200 text-center"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default Home;
