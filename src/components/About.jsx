import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#1C1C1E] py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-400 mb-4">Who Are We</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-12">
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">
              Our Story
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Dino's Barber has been part of the Cape Town community for more than
              two decades. What started as a small neighborhood shop has grown
              into a place where generations come to look sharp, feel good, and
              connect.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We take pride in knowing our clients by name, understanding their
              style, and giving them a place that feels like home. Whether
              you're here for a fresh fade, a beard trim, or just good
              conversation, Dino's Barber is where quality meets community.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To provide exceptional barbering services while building lasting
                relationships with our community. We believe every cut is a
                conversation, and every visit is an experience.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                Our Values
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Quality craftsmanship in every service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Community-first approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Traditional techniques with modern style</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Welcoming atmosphere for everyone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
