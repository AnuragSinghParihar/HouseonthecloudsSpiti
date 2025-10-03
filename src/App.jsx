import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Accommodation from "./components/Accommodation";
import SnowLeopardExpedition from "./components/SnowLeopardExpedition";
import Journey from "./components/Journey";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/snow-leopard" element={<SnowLeopardExpedition />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
