import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import "./TariffPolicy.css";

export default function TariffPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="tp-page">

      {/* Hero */}
      <div className="tp-hero">
        <div className="tp-hero-overlay" />
        <div className="tp-hero-content">
          <p className="tp-eyebrow">Julley — House on the Clouds</p>
          <h1 className="tp-hero-title">Tariff &amp; Cancellation</h1>
          <p className="tp-hero-sub">Spiti Valley · Chicham, Himachal Pradesh</p>
        </div>
      </div>

      {/* Body */}
      <div className="tp-body">

        <ScrollReveal as="p" animation="up" className="tp-intro">
          Julley! We welcome you with open arms. Below you'll find everything
          you need to know about our room tariff, meals, and cancellation
          terms — so your journey to the clouds is as seamless as the valley views.
        </ScrollReveal>

        {/* Extra Mattress */}
        <ScrollReveal as="section" animation="up" className="tp-section">
          <h2 className="tp-section-title">Extra Mattress</h2>
          <div className="tp-divider" />
          <div className="tp-card">
            <div className="tp-row">
              <span className="tp-label">Rate</span>
              <span className="tp-value">₹3,000 per night <span className="tp-note">(with breakfast)</span></span>
            </div>
            <div className="tp-row">
              <span className="tp-label">Availability</span>
              <span className="tp-value">Valley View Rooms only</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Complimentary */}
        <ScrollReveal as="section" animation="up" delay={80} className="tp-section">
          <h2 className="tp-section-title">Complimentary Inclusions</h2>
          <div className="tp-divider" />
          <ul className="tp-list">
            <li>Breakfast</li>
            <li>Village walk &amp; local experience</li>
            <li>Scenic valley views</li>
          </ul>
        </ScrollReveal>

        {/* Meals */}
        <ScrollReveal as="section" animation="up" delay={80} className="tp-section">
          <h2 className="tp-section-title">Meals</h2>
          <div className="tp-divider" />
          <div className="tp-card">
            <div className="tp-row">
              <span className="tp-label">À la carte</span>
              <span className="tp-value">Available 11 AM – 6 PM</span>
            </div>
            <div className="tp-row tp-row-top">
              <span className="tp-label">After 6 PM</span>
              <span className="tp-value">
                Fixed meals only — à la carte unavailable
                <ul className="tp-sub-list">
                  <li><span className="tp-price">₹500</span> Veg main meal</li>
                  <li><span className="tp-price">₹600</span> Non-veg light meal</li>
                  <li><span className="tp-price">₹750</span> Soup to Dessert</li>
                </ul>
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Cancellation */}
        <ScrollReveal as="section" animation="up" delay={80} className="tp-section">
          <h2 className="tp-section-title">Cancellation Policy</h2>
          <div className="tp-divider" />
          <div className="tp-cancellation">
            <div className="tp-cancel-item">
              <div className="tp-cancel-badge tp-badge-green">60+ days</div>
              <div className="tp-cancel-text">
                <strong>10% deduction</strong>
                <p>Cancellations made 60 or more days prior to check-in</p>
              </div>
            </div>
            <div className="tp-cancel-item">
              <div className="tp-cancel-badge tp-badge-amber">21–60 days</div>
              <div className="tp-cancel-text">
                <strong>25% deduction</strong>
                <p>Cancellations made 21 to 60 days prior to check-in</p>
              </div>
            </div>
            <div className="tp-cancel-item">
              <div className="tp-cancel-badge tp-badge-red">Within 20 days</div>
              <div className="tp-cancel-text">
                <strong>No refund</strong>
                <p>Cancellations within 20 days of check-in</p>
              </div>
            </div>
            <div className="tp-cancel-item">
              <div className="tp-cancel-badge tp-badge-red">No-show / Early check-out</div>
              <div className="tp-cancel-text">
                <strong>Full charge</strong>
                <p>No-shows and early departures are charged in full</p>
              </div>
            </div>
          </div>
          <p className="tp-note-block">
            Remaining balance is payable at check-in.
          </p>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal as="div" animation="up" className="tp-contact">
          <p>Questions about your booking?</p>
          <a href="mailto:houseonthecloudsspiti@gmail.com" className="tp-contact-link">
            houseonthecloudsspiti@gmail.com
          </a>
          <span className="tp-sep">·</span>
          <a href="tel:+919805848433" className="tp-contact-link">
            +91 98058 48433
          </a>
        </ScrollReveal>

      </div>
    </div>
  );
}
