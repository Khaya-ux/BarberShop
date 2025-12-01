import React from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Background>
        <Navbar />
        <Home />
      </Background>
      <About />
    </div>
  );
}

export default App;
