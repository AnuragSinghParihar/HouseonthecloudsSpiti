import React, { useState } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import "./SnowLeopardExpedition.css";

const SnowLeopardExpedition = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const itinerary = [
    {
      day: 1,
      date: "FEB 14",
      title: "CHANDIGARH - THANEDAR",
      altitude: "2350 M",
      distance: "195 kms / 6 hrs",
      description:
        "Reach Chandigarh Airport / Railway Station (morning Shatabdi from Delhi) and drive via Shimla & Narkanda to reach the apple orchard draped mountainside of Thanedar. Evening at leisure besides a bonfire in the Banjara Orchard Retreat.",
      image: "chandigarh-thanedar.jpg",
    },
    {
      day: 2,
      date: "FEB 15",
      title: "THANEDAR - SANGLA",
      altitude: "2700 M",
      distance: "156 kms / 6 hrs",
      description:
        "Post breakfast depart for Sangla Valley, Reach the Banjara Camp & Retreat in Sangla Valley by late afternoon and enjoy the evening by a bonfire. Night stay in the Banjara Retreat.",
      image: "thanedar-sangla.jpg",
    },
    {
      day: 3,
      date: "FEB 16",
      title: "SANGLA - KIBBER",
      altitude: "4200 M",
      distance: "180 kms / 8 hrs",
      description:
        "Early morning drive to Spiti Valley via Karcham, Pooh, and Nako. Cross the treacherous roads to reach Kibber village - one of the highest motorable villages in the world. Evening acclimatization walk.",
      image: "sangla-kibber.jpg",
    },
    {
      day: 4,
      date: "FEB 17",
      title: "FIRST TRACKING DAY",
      altitude: "4200 M",
      distance: "Trek / Full day",
      description:
        "Begin our first snow leopard tracking expedition. Early morning departure with local guides and wildlife experts. Learn to identify pugmarks, scats, and territorial markings. Overnight camping under the stars.",
      image: "first-tracking.jpg",
    },
    {
      day: 5,
      date: "FEB 18",
      title: "DEEP VALLEY EXPLORATION",
      altitude: "4500 M",
      distance: "Trek / Full day",
      description:
        "Venture deeper into snow leopard territory. Visit Key Monastery and interact with local Buddhist monks. Advanced tracking techniques and wildlife photography sessions. Traditional Spitian dinner.",
      image: "deep-valley.jpg",
    },
    {
      day: 6,
      date: "FEB 19",
      title: "SUMMIT TRACKING",
      altitude: "4800 M",
      distance: "Trek / Full day",
      description:
        "Our best chance for snow leopard sighting. High altitude tracking with professional wildlife photographers. Panoramic views of the Trans-Himalayas. Celebration dinner if successful sighting.",
      image: "summit-tracking.jpg",
    },
    {
      day: 7,
      date: "FEB 20",
      title: "RETURN TO MANALI",
      altitude: "2050 M",
      distance: "200 kms / 10 hrs",
      description:
        "Final tracking session at dawn. Pack equipment and begin journey back to Manali via Kaza and Rohtang Pass. Evening arrival and overnight stay at heritage hotel.",
      image: "return-manali.jpg",
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
                  <span className="value">12 nights 13 days</span>
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
              natural habitat is unmatched.
            </p>

            <div className="facts-grid">
              <div className="fact-item">
                <h3>4,000-6,500</h3>
                <p>Population in the wild</p>
              </div>
              <div className="fact-item">
                <h3>3,000-5,500m</h3>
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
                  <span className="day-date">{item.date}</span>
                </div>
              ))}
            </div>

            <div className="day-content">
              {itinerary
                .filter((item) => item.day === selectedDay)
                .map((day) => (
                  <div key={day.day} className="day-detail">
                    <div className="day-image-placeholder">
                      <img src={`/api/placeholder/800/400`} alt={day.title} />
                      <div className="image-overlay">
                        <span>
                          Day {day.day}: {day.date}
                        </span>
                      </div>
                    </div>

                    <div className="day-info">
                      <h3>
                        {day.title} ({day.altitude})
                      </h3>
                      <div className="day-stats">
                        <span>{day.distance}</span>
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
              expedition
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
                <p>12 nights 13 days</p>
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
