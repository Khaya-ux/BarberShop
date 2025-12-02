import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-30 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            className="h-7"
            alt="Dino Barber Logo"
          />
          <span className="text-white font-semibold text-xl">
            Dino BarberShop
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="md:hidden p-2 text-white rounded-lg hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 text-white">
            <li>
              <Link
                to="/"
                className={`hover:text-gray-300 transition-colors ${
                  isActive("/") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-gray-300 transition-colors ${
                  isActive("/about") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`hover:text-gray-300 transition-colors ${
                  isActive("/services") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={`hover:text-gray-300 transition-colors ${
                  isActive("/pricing") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className={`hover:text-gray-300 transition-colors ${
                  isActive("/booking") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Book Appointment
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                className={`hover:text-gray-300 transition-colors ${
                  isActive("/reservations") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-gray-300 transition-colors ${
                  isActive("/contact") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col p-4 space-y-4 text-white">
            <li>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 hover:text-gray-300 transition-colors ${
                  isActive("/") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 hover:text-gray-300 transition-colors ${
                  isActive("/about") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 hover:text-gray-300 transition-colors ${
                  isActive("/services") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 hover:text-gray-300 transition-colors ${
                  isActive("/pricing") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 hover:text-gray-300 transition-colors ${
                  isActive("/booking") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Book Appointment
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 hover:text-gray-300 transition-colors ${
                  isActive("/reservations") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 hover:text-gray-300 transition-colors ${
                  isActive("/contact") ? "text-gray-300 font-semibold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
