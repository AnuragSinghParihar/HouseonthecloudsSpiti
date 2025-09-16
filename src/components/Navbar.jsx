import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <section className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/journey" className="link-btn">The Journey</Link>
          <Link to="/accommodation">Accommodation</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-center">
          <div className="logo-box">
            <Link to="/">
              <img src="/images/navbar-logo.jpg" alt="Logo" />
            </Link>
          </div>
        </div>

        <div className="navbar-right">
          <a href="https://live.ipms247.com/booking/book-rooms-houseonthecloudsspiti" target="_blank" rel="noopener noreferrer" className="book-btn">Book Here</a>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
