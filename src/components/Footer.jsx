import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <ScrollReveal as="header" animation="up" className="footer-logo-header">
        <div className="footer-logo-center">
          <img src="/images/logo.jpg" alt="Logo" className="footer-logo" />
        </div>
        <h1 className="footer-main-title">
          <i>House on the Clouds</i>
        </h1>
        <p className="footer-location">SPITI VALLEY</p>
        <p className="footer-tagline">A place to pause, breathe and belong</p>
        <div className="footer-underline"></div>
      </ScrollReveal>

      <div className="footer-divider"></div>

      <section className="footer-main-section">
        <ScrollReveal as="div" animation="left" className="footer-left">
          <p>
            HOUSE ON THE CLOUDS, Chicham village 172114,
            <br />
            Kaza, Himachal Pradesh, India
          </p>
          <p>
            <strong>houseonthecloudsspiti@gmail.com</strong>
            <br />
            +91 9805848433
          </p>
        </ScrollReveal>
        <div className="footer-center"></div>
        <ScrollReveal as="div" animation="right" delay={100} className="footer-right">
          <Link to="/journey" className="footer-link">
            The Journey
          </Link>
          <Link to="/accommodation" className="footer-link">
            Accommodation
          </Link>
          <Link to="/gallery" className="footer-link">
            Gallery
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <div className="footer-instagram-section">
            <a
              href="https://www.instagram.com/houseontheclouds.spiti/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Large Brand Text */}
      <ScrollReveal as="div" animation="up" className="footer-brand-text">
        HOUSE ON THE CLOUDS
      </ScrollReveal>

      {/* Bottom Info */}
      <div className="footer-bottom-info">
        <div className="footer-legal-links">
          <Link to="/hotel-policy">Hotel Policy</Link>
        </div>
        <div className="footer-copyright">
          ©HouseOnTheClouds 2025. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
