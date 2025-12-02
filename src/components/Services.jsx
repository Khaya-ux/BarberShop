import React from "react";

function Services() {
  const services = [
    {
      title: "Classic Haircut",
      description: "Traditional barbering with modern precision. A timeless cut tailored to your style.",
      icon: "✂️",
    },
    {
      title: "Fade & Style",
      description: "Expert fades from skin to scissor. Clean lines and sharp edges every time.",
      icon: "💈",
    },
    {
      title: "Beard Trim",
      description: "Professional beard shaping and trimming to keep you looking sharp.",
      icon: "🧔",
    },
    {
      title: "Hot Towel Shave",
      description: "Luxurious traditional shave with hot towels and premium products.",
      icon: "🪒",
    },
    {
      title: "Hair & Beard Combo",
      description: "Complete grooming package for the ultimate fresh look.",
      icon: "✨",
    },
    {
      title: "Hair Styling",
      description: "Expert styling and product application to perfect your look.",
      icon: "💇",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1E] py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-400 mb-4">Our Services</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Professional barbering services with attention to detail and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

