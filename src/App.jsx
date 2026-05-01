import { useState } from "react";
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
import LoadingScreen from "./components/LoadingScreen";
import HotelPolicy from "./components/HotelPolicy";
import TariffPolicy from "./components/TariffPolicy";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
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
          <Route path="/hotel-policy" element={<HotelPolicy />} />
          <Route path="/tariff" element={<TariffPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
