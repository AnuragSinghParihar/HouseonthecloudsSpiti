import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FAQ data
  const faqData = [
    {
      question: "What's the best time to visit Spiti Valley?",
      answer:
        "May to October is ideal. June-September offers pleasant weather (10-25°C). Avoid November-April due to heavy snow and road closures.",
    },
    {
      question: "What is the height of Chicham Bridge?",
      answer:
        "Chicham Bridge is Asia's highest suspension bridge at 13,596 feet, suspended 1,000 feet above a deep gorge near our property.",
    },
    {
      question: "When does it snow in Spiti?",
      answer:
        "Heavy snowfall occurs from November to March. Light snow possible in October and April. Summer months (June-September) are snow-free.",
    },
    {
      question: "What are the temperatures like?",
      answer:
        "Summer: 10-25°C (day), 0-10°C (night). Winter: -15 to 5°C. Temperatures drop significantly at night even in summer.",
    },
    {
      question: "What should I carry to Spiti?",
      answer:
        "Warm layers, thermal wear, waterproof jacket, sturdy boots, sunglasses, sunscreen (high SPF), medicines, power bank, and cash.",
    },
    {
      question: "How are the roads to Spiti?",
      answer:
        "Roads are challenging with hairpin bends and high altitude. Manali-Kaza route is better maintained. Self-driving requires mountain experience.",
    },
    {
      question: "What unique experiences does Spiti offer?",
      answer:
        "Visit ancient monasteries (Key, Tashigang), spot snow leopards, explore fossil villages (Langza), cross Chicham Bridge, and stargaze in pristine skies.",
    },
    {
      question: "What are some offbeat things to do in Spiti?",
      answer:
        "Visit Hikkim post office (world's highest), explore Komic village, fossil hunting in Langza, meditation retreats, and traditional Spitian cooking classes.",
    },
  ];

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  // Close FAQ when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showFAQ && !event.target.closest(".faq-section")) {
        setShowFAQ(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFAQ]);

  return (
    <nav>
      <section className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <Link to="/journey" className="link-btn">
            The Journey
          </Link>
          <Link to="/accommodation">Accommodation</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-center">
          <div className="logo-box">
            <Link to="/">
              <img src="/images/logo.jpg" alt="Logo" />
            </Link>
          </div>
        </div>

        <div className="navbar-right">
          <div className="faq-section">
            <button
              className="faq-btn"
              onClick={toggleFAQ}
              aria-expanded={showFAQ}
              aria-label="Frequently Asked Questions"
            >
              FAQ
              <span className={`faq-arrow ${showFAQ ? "open" : ""}`}>▼</span>
            </button>

            {showFAQ && (
              <div className="faq-dropdown">
                <div className="faq-header">
                  <h3>Frequently Asked Questions</h3>
                </div>
                <div className="faq-list">
                  {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h4 className="faq-question">{faq.question}</h4>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="faq-footer">
                  <div className="faq-contact-info">
                    <p>
                      <strong>houseonthecloudsspiti@gmail.com</strong>
                    </p>
                    <p>+91 9805848433</p>
                  </div>
                  <Link to="/contact" className="faq-contact-link">
                    Have more questions? Contact us
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a
            href="https://live.ipms247.com/booking/book-rooms-houseonthecloudsspiti"
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
          >
            Book Here
          </a>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
