import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import "./HotelPolicy.css";

const sections = [
  {
    title: "Hotel Policy",
    items: [
      {
        heading: "Tariff",
        text: "Room charges exclude applicable taxes and additional services. Guests are advised to contact the Duty Manager for detailed information.",
      },
      {
        heading: "Bill Settlement",
        text: "All bills must be settled upon presentation. Personal cheques are not accepted.",
      },
      {
        heading: "Luggage and Belongings",
        text: "Management reserves the right to retain or auction guest belongings in case of unpaid dues.",
      },
      {
        heading: "Luggage Storage",
        text: "Storage services are provided at the guest's risk and are limited to a maximum of 30 days.",
      },
      {
        heading: "Guest Belongings",
        text: "Valuables should be secured in lockers provided by the hotel. Management is not responsible for any loss or damage.",
      },
      {
        heading: "Pets",
        text: "Pets are not allowed on the premises.",
      },
      {
        heading: "Prohibited Items",
        text: "Hazardous goods, contraband, weapons, and gambling activities are strictly prohibited.",
      },
      {
        heading: "Property Damage",
        text: "Guests will be held liable for any damage to hotel property caused by themselves or their visitors.",
      },
      {
        heading: "Guest Conduct",
        text: "Guests are expected to maintain decorum. The management reserves the right to evict disruptive or disrespectful individuals.",
      },
      {
        heading: "Rights",
        text: "Guests do not acquire tenancy rights; the management retains full control of the premises.",
      },
      {
        heading: "Compliance",
        text: "All guests must adhere to applicable laws and hotel regulations.",
      },
      {
        heading: "Visitors",
        text: "Visitors are not allowed in guest rooms without prior permission and may incur additional charges.",
      },
    ],
  },
  {
    title: "Check-In & Check-Out",
    items: [
      {
        heading: "Check-In",
        text: "Guests must present valid identification for verification purposes.",
      },
      {
        heading: "Check-Out",
        text: "Rooms must be vacated by the designated time. Late check-out is subject to availability and additional charges.",
      },
    ],
  },
  {
    title: "Additional Hotel Policies",
    list: [
      "Valuables left in rooms/suites are the responsibility of the guest; use the hotel's safe custody service.",
      "Damaged or broken items will incur charges thrice their market value, as determined by the management.",
      "Guests are prohibited from affixing labels or markings to walls and furniture. Charges for damages will apply.",
      "Room tariffs may change without prior notice.",
      "Advance payments are non-refundable under certain circumstances.",
      "Illegal or improper use of hotel premises is strictly prohibited.",
      "Laundry services must be used for washing clothes; in-room washing is not allowed.",
      "Visitors are only allowed in guest rooms with prior permission from reception.",
      "Outside food and beverages are not permitted inside the hotel premises.",
    ],
  },
  {
    title: "Refund & Cancellation Policy",
    items: [
      {
        heading: "Refund Timeline",
        text: "The refund timeline typically takes 1 to 7 business days once a guest cancels their reservation.",
      },
    ],
  },
];

export default function HotelPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hp-page">
      {/* Hero */}
      <div className="hp-hero">
        <div className="hp-hero-overlay" />
        <div className="hp-hero-content">
          <p className="hp-hero-eyebrow">House on the Clouds</p>
          <h1 className="hp-hero-title">Hotel Policy</h1>
          <p className="hp-hero-sub">Spiti Valley, Himachal Pradesh</p>
        </div>
      </div>

      {/* Content */}
      <div className="hp-body">
        <ScrollReveal as="p" animation="up" className="hp-intro">
          We want every guest to feel at home in the clouds. Please take a
          moment to familiarise yourself with our policies — they help us
          maintain the peaceful, respectful environment that makes House on the
          Clouds special.
        </ScrollReveal>

        {sections.map((section, si) => (
          <ScrollReveal
            key={si}
            as="section"
            animation="up"
            delay={si * 80}
            className="hp-section"
          >
            <h2 className="hp-section-title">{section.title}</h2>
            <div className="hp-section-divider" />

            {section.items &&
              section.items.map((item, ii) => (
                <div key={ii} className="hp-item">
                  <h3 className="hp-item-heading">{item.heading}</h3>
                  <p className="hp-item-text">{item.text}</p>
                </div>
              ))}

            {section.list && (
              <ul className="hp-list">
                {section.list.map((point, pi) => (
                  <li key={pi} className="hp-list-item">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </ScrollReveal>
        ))}

        <ScrollReveal as="div" animation="up" className="hp-contact">
          <p>Questions about our policies?</p>
          <a href="mailto:houseonthecloudsspiti@gmail.com" className="hp-contact-link">
            houseonthecloudsspiti@gmail.com
          </a>
          <span className="hp-contact-sep">·</span>
          <a href="tel:+919805848433" className="hp-contact-link">
            +91 98058 48433
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
}
