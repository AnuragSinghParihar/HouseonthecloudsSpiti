import React, { useState } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import "./SnowLeopardExpedition.css";

const SnowLeopardExpedition = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const itinerary = [
    {
      day: 1,
      date: "TBA",
      title: "CHANDIGARH TO RAMPUR BUSHAHR",
      accommodation: "Heritage Hotel, Rampur Bushahr",
      distance: "Travel day",
      description:
        "Begin your mountain adventure with a scenic drive through the Shivalik hills, leaving the plains behind for the majestic Himalayas. Settle into your accommodation at Rampur Bushahr, explore the ancient Padam Palace and prepare for the wilderness ahead.",
      image: "/images/expedition_5.jpg",
    },
    {
      day: 2,
      date: "TBA",
      title: "RAMPUR TO KAZA",
      accommodation: "Local Homestay Experience in Kaza",
      distance: "Journey through Kinnaur",
      description:
        "Journey through the dramatic landscapes of Kinnaur region, witnessing the stunning transformation from lush green valleys to the stark, beautiful desert mountains of Spiti. Experience authentic Spitian hospitality at a traditional Kaza homestay while acclimatizing to high altitude.",
      image: "/images/expedition_2.jpg",
    },
    {
      day: 3,
      date: "TBA",
      title: "ARRIVAL AT CHICHAM",
      accommodation: "House on the Clouds, Chicham (13,500 feet)",
      distance: "Via Tabo & Ki Monastery",
      description:
        "Visit the iconic 1000-year-old Tabo Monastery and legendary Ki Monastery before crossing Asia's highest suspension bridge. Check into your expedition base - House on the Clouds in Chicham Village at 13,500 feet, where sustainable luxury meets wilderness adventure.",
      image: "/images/expedition_1.jpg",
    },
    {
      day: 4,
      date: "TBA",
      title: "FIRST TRACKING DAY",
      accommodation: "House on the Clouds Base",
      distance: "Full day tracking",
      description:
        "Begin your quest for the 'Grey Ghost of the Himalayas' with a pre-dawn trek into pristine snow-covered wilderness guided by local experts. Return to the eco-friendly comfort of House on the Clouds after scanning ridges for the world's most elusive big cat.",
      image: "/images/expedition_3.jpg",
    },
    {
      day: 5,
      date: "TBA",
      title: "SECOND DAY TRACKING",
      accommodation: "House on the Clouds",
      distance: "Extended wilderness tracking",
      description:
        "Venture deeper into snow leopard territory following fresh tracks and local intelligence from your experienced spotters. Evening warmth at House on the Clouds - share discoveries over traditional Spitian dinner while your hosts prepare tomorrow's expedition.",
      image: "/images/expedition_4.jpg",
    },
    {
      day: 6,
      date: "TBA",
      title: "EXTENDED TRACKING",
      accommodation: "House on the Clouds",
      distance: "Pre-dawn to dusk",
      description:
        "Maximize your sighting opportunities with extended field time during peak activity hours, from pre-dawn to dusk. Celebrate at House on the Clouds under pristine Himalayan stars - your mountain sanctuary offering solar-powered comfort at 14,000 feet.",
      image: "/images/gallery-animal-4.JPG",
    },
    {
      day: 7,
      date: "TBA",
      title: "FINAL EXPEDITION DAY",
      accommodation: "House on the Clouds",
      distance: "Tracking or cultural immersion",
      description:
        "Either pursue your final intensive tracking opportunity or enjoy cultural experiences with Chicham villagers if sightings are successful. Last night at House on the Clouds - participate in traditional cooking and connect deeply with your mountain hosts.",
      image: "/images/gallery-animal-1.JPG",
    },
    {
      day: 8,
      date: "TBA",
      title: "FAREWELL CHICHAM TO RAMPUR",
      accommodation: "Heritage Hotel, Rampur Bushahr",
      distance: "Return journey",
      description:
        "Bid emotional farewell to House on the Clouds and the resilient people of Chicham as you descend through changing climatic zones. Comfortable night at Heritage Hotel, Rampur Bushahr to process your transformative wilderness experiences.",
      image: "/images/gallery-hotel-1.jpg",
    },
    {
      day: 9,
      date: "TBA",
      title: "RAMPUR TO CHANDIGARH",
      accommodation: "Departure",
      distance: "Final mountain drive",
      description:
        "Complete your transformative Himalayan journey with a final mountain drive, carrying unforgettable memories from House on the Clouds. Return to Chandigarh enriched by one of the world's most extraordinary wildlife experiences centered around sustainable mountain hospitality.",
      image: "/images/gallery-scape-5.JPG",
    },
  ];

  return (
    <div className="snow-leopard-expedition">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-placeholder">
          <div className="hero-content">
            <div className="expedition-badge">WILDLIFE EXPEDITION</div>
            <h1>Snow Leopard Tracking</h1>
            <p>
              The ultimate winter adventure that takes you deep into the
              Himalayas to a small village in Spiti that has in recent years
              become a hot spot to sight the elusive Snow Leopard as well as
              other exotic Himalayan fauna and avi-fauna
            </p>

            <div className="expedition-details">
              <div className="detail-item">
                <Calendar className="icon" />
                <div>
                  <span className="label">Duration</span>
                  <span className="value">9 Days</span>
                </div>
              </div>
              <div className="detail-item">
                <MapPin className="icon" />
                <div>
                  <span className="label">Location</span>
                  <span className="value">Spiti Valley, Himalayas</span>
                </div>
              </div>
              <div className="detail-item">
                <Users className="icon" />
                <div>
                  <span className="label">Group Size</span>
                  <span className="value">Max 8 people</span>
                </div>
              </div>
            </div>

            <div className="dates-announcement">
              <p>Dates to be announced.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>The Ghost of the Mountains</h2>
            <p>
              Snow leopards are among the most elusive and magnificent predators
              in the world, perfectly adapted to the harsh, high-altitude
              environment of the Himalayas. This expedition takes you into their
              domain, where temperatures drop to -20°C and the air is thin, but
              the reward of witnessing these incredible creatures in their
              natural habitat is unmatched. Your base will be House on the
              Clouds in Chicham Village at 13,500 feet - a unique eco-friendly
              retreat that combines sustainable luxury with authentic wilderness
              adventure.
            </p>

            <div className="facts-grid">
              <div className="fact-item">
                <h3>4,000-6,500</h3>
                <p>Population in the wild</p>
              </div>
              <div className="fact-item">
                <h3>~9,800–18,000 ft</h3>
                <p>Altitude range</p>
              </div>
              <div className="fact-item">
                <h3>95%</h3>
                <p>Success rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="itinerary-section">
        <div className="container">
          <h2>Expedition Itinerary</h2>

          <div className="itinerary-container">
            <div className="days-sidebar">
              {itinerary.map((item) => (
                <div
                  key={item.day}
                  className={`day-tab ${
                    selectedDay === item.day ? "active" : ""
                  }`}
                  onClick={() => setSelectedDay(item.day)}
                >
                  <span className="day-number">Day {item.day}</span>
                  {/* <span className="day-date">{item.date}</span> */}
                  <span className="day-date">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="day-content">
              {itinerary
                .filter((item) => item.day === selectedDay)
                .map((day) => (
                  <div key={day.day} className="day-detail">
                    <div className="day-image-placeholder">
                      <img src={day.image} alt={day.title} />
                      <div className="image-overlay">
                        <span>
                          Day {day.day}
                          {/* : {day.date} */}
                        </span>
                      </div>
                    </div>

                    <div className="day-info">
                      <h3>{day.title}</h3>
                      <div className="day-stats">
                        <span>
                          <strong>Stay:</strong> {day.accommodation}
                        </span>
                        {day.distance && (
                          <>
                            <span> • </span>
                            <span>{day.distance}</span>
                          </>
                        )}
                      </div>
                      <p>{day.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2>Expedition Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="/images/gallery-animal-5.JPG"
                alt="Snow leopard in habitat"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/landing-place-key-monastery.jpg"
                alt="Himalayan landscape"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/Tracking-expedition.JPG"
                alt="Tracking expedition"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/gallery-scape-4.JPG"
                alt="Spiti Valley winter"
              />
            </div>
            <div className="gallery-item">
              <img src="images/gallery-scape-2.JPG" alt="Buddhist monastery" />
            </div>
            <div className="gallery-item">
              <img
                src="images/gallery-animal-1.JPG"
                alt="Wildlife photography"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Ready for the Adventure?</h2>
            <p>
              Join us for this once-in-a-lifetime snow leopard tracking
              expedition based at House on the Clouds
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p>houseonthecloudsspiti@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>+91 9805848433</p>
              </div>
              <div className="contact-item">
                <h3>Duration</h3>
                <p>9 Days</p>
              </div>
            </div>

            <button className="book-button">Contact for Booking</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SnowLeopardExpedition;
