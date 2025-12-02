import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  const pricing = [
    {
      service: "Classic Haircut",
      price: "R250",
      duration: "30 min",
    },
    {
      service: "Fade & Style",
      price: "R300",
      duration: "35 min",
    },
    {
      service: "Beard Trim",
      price: "R150",
      duration: "20 min",
    },
    {
      service: "Hot Towel Shave",
      price: "R350",
      duration: "40 min",
    },
    {
      service: "Hair & Beard Combo",
      price: "R400",
      duration: "45 min",
    },
    {
      service: "Hair Styling",
      price: "R200",
      duration: "25 min",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1E] py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-400 mb-4">Pricing</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Transparent pricing for all our services. Walk-ins welcome, appointments preferred.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden">
            <div className="divide-y divide-white/10">
              {pricing.map((item, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-300 mb-1">
                        {item.service}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-400">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg mb-6">
              Questions about our services or pricing?
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gray-400 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

