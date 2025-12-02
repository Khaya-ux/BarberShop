import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-400 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-300 mb-6">
                Visit Us
              </h3>
              <div className="space-y-4 text-gray-400">
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Address</p>
                  <p>123 Long Street</p>
                  <p>Cape Town, Western Cape 8001</p>
                  <p>South Africa</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Phone</p>
                  <p>+27 21 123 4567</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Email</p>
                  <p>info@dinosbarber.co.za</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-300 mb-1">Hours (SAST)</p>
                  <p>Monday - Friday: 9:00 - 18:00</p>
                  <p>Saturday: 8:00 - 17:00</p>
                  <p>Sunday: 10:00 - 15:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-300 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  placeholder="+27 21 123 4567"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gray-400 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

