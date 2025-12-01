import React from "react";
import backgroundImage from "../assets/bg.png";

function Background({ children }) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;
