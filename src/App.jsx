import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Background>
                  <Navbar />
                  <Home />
                </Background>
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Navbar />
                <Pricing />
                <Footer />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <>
                <Navbar />
                <Booking />
                <Footer />
              </>
            }
          />
          <Route
            path="/reservations"
            element={
              <>
                <Navbar />
                <Reservations />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
