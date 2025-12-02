import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                className="h-6"
                alt="Dino Barber Logo"
              />
              <span className="text-white font-semibold text-lg">
                Dino BarberShop
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Quality barbering services for over two decades. Where tradition
              meets style.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-gray-300 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-gray-300 transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-gray-300 transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Long Street</li>
              <li>Cape Town, Western Cape 8001</li>
              <li>South Africa</li>
              <li>+27 21 123 4567</li>
              <li>info@dinosbarber.co.za</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dino's BarberShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

