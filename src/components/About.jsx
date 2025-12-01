import React from "react";

function About() {
  return (
    <div className="flex items-center min-h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center bg-[#1C1C1E] min-h-screen">
        <h2 className="text-6xl text-gray-400">Who are we</h2>
      </div>

      <div className="w-1/2 text-black text-lg leading-relaxed p-8 bg-gray-400 min-h-screen flex items-center">
        <p>
          Dino's Barber has been part of the Florida community for more than two
          decades. What started as a small neighborhood shop has grown into a
          place where generations come to look sharp, feel good, and connect. We
          take pride in knowing our clients by name, understanding their style,
          and giving them a place that feels like home. Whether you're here for
          a fresh fade, a beard trim, or just good conversation, Dino's Barber
          is where quality meets community.
        </p>
      </div>
    </div>
  );
}

export default About;
