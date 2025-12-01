import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-30 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="/src/assets/logo.png"
            className="h-7"
            alt="Dino Barber Logo"
          />
          <span className="text-white font-semibold text-xl">
            Dino BarberShop
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden p-2 text-white rounded-lg hover:bg-white/10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
