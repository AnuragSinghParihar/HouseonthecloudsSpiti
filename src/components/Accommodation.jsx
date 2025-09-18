import React, { useState } from "react";
import "./Accommodation.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Accommodation = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  const handleAccordionToggle = (index) => {
    setExpandedAccordion(expandedAccordion === index ? -1 : index);
  };

  return (
    <div className="accommodation-page">
      <Navbar />

      {/* Hero Section */}
      <section className="accom-hero-section">
        <div className="accom-hero-container">
          <div className="accom-hero-content">
            <div className="accom-hero-text">
              <h1 className="accom-hero-title">Stay With Us</h1>
              <div className="accom-hero-divider"></div>
              <p className="accom-hero-subtitle">
                Your house above the clouds at 13,500 ft
              </p>
            </div>
          </div>
          <div className="accom-hero-image">
            <img
              src="images/accommodation-room.jpg"
              alt="Luxury mountain accommodation"
              className="accom-hero-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Room Showcase Section 1 */}
      <section className="accom-showcase-section">
        <div className="accom-showcase-container">
          <div className="accom-showcase-image">
            <img
              src="/images/accommodation-room-1.jpg"
              alt="Mountain view room"
              className="accom-showcase-img"
              loading="lazy"
            />
          </div>
          <div className="accom-showcase-content">
            <h3 className="accom-showcase-title">Mountain Sanctuary</h3>
            <p className="accom-showcase-text">
              A serene mountain retreat where elegance meets comfort—this room
              features large windows that open to breathtaking valley views, a
              cozy seating corner perfect for slow mornings, and warm wooden
              interiors that blend modern design with natural charm.
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Feature Image */}
      <section className="accom-feature-section">
        <div className="accom-feature-container">
          <img
            src="/images/accommodation-room-2.jpg"
            alt="Spacious bedroom with mountain views"
            className="accom-feature-img"
            loading="lazy"
          />
          <div className="accom-feature-overlay">
            <h2 className="accom-feature-quote">
              "Where comfort meets the infinite sky"
            </h2>
          </div>
        </div>
      </section>

      {/* Room Showcase Section 2 */}
      <section className="accom-showcase-section accom-showcase-reverse">
        <div className="accom-showcase-container">
          <div className="accom-showcase-content">
            <h3 className="accom-showcase-title">Earthy Elegance</h3>
            <p className="accom-showcase-text">
              Inspired by the natural palette of Spiti, this room blends earthy
              textures with modern elegance. The handcrafted wall design and
              warm accents reflect the valley's rugged beauty, while plush
              bedding and soft tones create a serene retreat in the heart of
              Chicham.
            </p>
          </div>
          <div className="accom-showcase-image">
            <img
              src="/images/accommodation-room-3.jpg"
              alt="Earthy bedroom design"
              className="accom-showcase-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Bathroom Section */}
      <section className="accom-showcase-section">
        <div className="accom-showcase-container">
          <div className="accom-showcase-image">
            <img
              src="/images/accommodation-bathroom-1.jpg"
              alt="Luxury bathroom with mountain view"
              className="accom-showcase-img"
              loading="lazy"
            />
          </div>
          <div className="accom-showcase-content">
            <h3 className="accom-showcase-title">Luxury Redefined</h3>
            <p className="accom-showcase-text">
              Experience luxury in every detail with our thoughtfully designed
              bathroom. Featuring modern fixtures, elegant tile work, and a
              window that frames the stunning mountain landscape, this space
              combines comfort with the breathtaking views that make House on
              the Clouds truly special.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Grid Section */}
      <section className="accom-amenities-section">
        <div className="accom-amenities-container">
          <div className="accom-amenities-header">
            <h2 className="accom-amenities-title">Experience Comfort</h2>
            <p className="accom-amenities-subtitle">
              During your stay you'll experience...
            </p>
          </div>

          <div className="accom-amenities-grid">
            <div className="accom-amenities-images">
              <div className="accom-amenity-image">
                <img
                  src="/images/accommodation-feature-left.jpg"
                  alt="Comfortable bedroom"
                  className="accom-amenity-img"
                  loading="lazy"
                />
              </div>
              <div className="accom-amenity-image">
                <img
                  src="/images/accommodation-feature-right.jpg"
                  alt="Traditional details"
                  className="accom-amenity-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="accom-amenities-list">
              <ul className="accom-features-list">
                <li className="accom-feature-item">
                  King-sized beds with premium linens
                </li>
                <li className="accom-feature-item">
                  Ensuite bathrooms with hot water
                </li>
                <li className="accom-feature-item">
                  Locally inspired decor & handcrafted details
                </li>
                <li className="accom-feature-item">Panoramic mountain views</li>
                <li className="accom-feature-item">
                  Heating arrangements for colder months
                </li>
                <li className="accom-feature-item">
                  Complimentary Wi-Fi (where available)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Showcase */}
      <section className="accom-architecture-section">
        <div className="accom-architecture-container">
          <img
            src="/images/accommodation-building-1.jpg"
            alt="Traditional Himalayan architecture"
            className="accom-architecture-img"
            loading="lazy"
          />
          <div className="accom-architecture-caption">
            <p>Traditional Himalayan architecture meets modern comfort</p>
          </div>
        </div>
      </section>

      {/* Common Areas */}
      <section className="accom-common-section">
        <div className="accom-common-container">
          <div className="accom-common-header">
            <h2 className="accom-common-title">Common Areas</h2>
            <p className="accom-common-subtitle">
              Spaces designed for connection and relaxation
            </p>
          </div>

          <div className="accom-common-gallery">
            <div className="accom-common-item accom-common-large">
              <img
                src="/images/accommodation-common-1.jpg"
                alt="Cozy lounge area"
                className="accom-common-img"
                loading="lazy"
              />
              <div className="accom-common-overlay">
                <h3>Lounge Area</h3>
              </div>
            </div>

            <div className="accom-common-item">
              <img
                src="/images/accommodation-common-2.jpg"
                alt="Living room with mountain views"
                className="accom-common-img"
                loading="lazy"
              />
              <div className="accom-common-overlay">
                <h3>Mountain Views</h3>
              </div>
            </div>

            <div className="accom-common-item">
              <img
                src="/images/accommodation-common-3.jpg"
                alt="Warm gathering space"
                className="accom-common-img"
                loading="lazy"
              />
              <div className="accom-common-overlay">
                <h3>Gathering Space</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Accordion */}
      <section className="accom-info-section">
        <div className="accom-info-container">
          <div className="accom-info-header">
            <h2 className="accom-info-title">Essential Information</h2>
            <p className="accom-info-subtitle">
              Everything you need to know for your stay
            </p>
          </div>

          <div className="accom-accordion-container">
            {[
              {
                title: "Cancellation & Refund Policy",
                content:
                  "The refund timeline typically takes 1 to 7 business days once a guest cancels their reservation. Cancellations made 48 hours prior to check-in are eligible for full refund.",
              },
              {
                title: "Payment Policy",
                content:
                  "All bills must be settled upon presentation. We accept cash, cards, and digital payments. Personal cheques are not accepted.",
              },
              {
                title: "Check-in & Check Out",
                content:
                  "Check-In Time: 12:00 PM | Check-Out Time: 11:00 AM. Early check-in and late check-out can be arranged based on availability. Please inform us of your expected arrival time. We provide airport transfers and can arrange local transportation upon request.",
              },
              {
                title: "Rates & Pricing",
                content:
                  "Rates vary by season and room type. Peak season: ₹8,000-15,000 per night. Off-season: ₹6,000-12,000 per night. All rates include breakfast and taxes. Room charges exclude applicable additional services.",
              },
            ].map((item, index) => (
              <div key={index} className="accom-accordion-item">
                <div
                  className="accom-accordion-header"
                  onClick={() => handleAccordionToggle(index)}
                >
                  <span className="accom-accordion-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="accom-accordion-title">{item.title}</h3>
                  <span
                    className={`accom-accordion-icon ${
                      expandedAccordion === index ? "active" : ""
                    }`}
                  >
                    {expandedAccordion === index ? "×" : "+"}
                  </span>
                </div>
                <div
                  className={`accom-accordion-content ${
                    expandedAccordion === index ? "active" : ""
                  }`}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;
