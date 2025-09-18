import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Landing = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  // Refs for intersection observer
  // const sectionRefs = useRef([]);

  // Enhanced scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || entry.target.className;
          setIsVisible((prev) => ({
            ...prev,
            [sectionId]: true,
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(
      ".experience-section, .bonfire-section, .outdoor-breakfast-section, .explore-section, .hotc-section, .local-welcome-section, .room-section, .background-text-section"
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Auto-dismiss success/error messages
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const Places = [
    {
      name: "Key Monastery",
      image: "/images/landing-place-key-monastery.jpg",
      description: `Perched dramatically on a hilltop, Key Monastery is the largest and oldest Buddhist monastery in the Spiti Valley. 
      With centuries-old murals, sacred scriptures, and peaceful monks, it's not just a spiritual site but a cultural experience. 
      The view of the Spiti River and valley from the top is simply breathtaking — a must-visit for history lovers and soul seekers.`,
    },
    {
      name: "Chicham Bridge",
      image: "/images/landing-place-chicham-bridge.jpg",
      description: `Chicham Bridge holds the record as Asia's highest suspension bridge, suspended over a gorge 1,000 feet deep. 
      Connecting remote mountain villages, this engineering marvel offers spectacular views and a thrilling experience. 
      Walking or driving across it gives you an adrenaline rush and a chance to click some truly Instagram-worthy shots.`,
    },
    {
      name: "Langza Buddha Statue",
      image: "/images/landing-place-langza-buddha.jpg",
      description: `Overlooking the Trans-Himalayas, the giant seated Buddha of Langza gazes peacefully at the valley below. 
      It's a symbol of harmony and heritage, surrounded by fossil-rich mountains and traditional mud houses. 
      Sunsets here are magical, casting golden hues across the peaks — making it a photographer's and meditator's dream alike.`,
    },
  ];

  const openPopup = (place) => {
    setSelectedPlace(place);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closePopup = () => {
    setSelectedPlace(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);

      // Add timestamp
      formData.append("timestamp", new Date().toISOString());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        e.target.reset();

        // Smooth scroll to success message
        setTimeout(() => {
          const successElement = document.querySelector(".success-message");
          if (successElement) {
            successElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 100);
      } else {
        setSubmitStatus("error");
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle escape key for popup
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedPlace) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedPlace]);

  return (
    <>
      <div className="landing-container">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={(e) => {
            console.error(
              "Background video error:",
              e.target.error || "Unknown error"
            );
            e.target.style.display = "none";
          }}
          onLoadStart={() => console.log("Video loading started")}
          onCanPlay={() => console.log("Video can play")}
          onPlay={() => console.log("Video started playing")}
        >
          <source src="/videos/landing-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Navbar />

        <div className="writting">
          <h6 className="heading-one">SPITI VALLEY</h6>
          <h2 className="heading-two">A place to pause, breathe and belong</h2>
          <h1 className="heading-three">House on the Clouds</h1>
        </div>
      </div>
      <section className="before-hero">
        <h1 className="heading-main-two">
          One of the World's Highest Boutique Stays
          <br /> <i>Perched at 13,615 ft in Chicham, Spiti Valley</i>
        </h1>
      </section>

      <section className="hero">
        <div className="after-hero">
          <h6 className="heading-one-hero">SPITI VALLEY</h6>
          <p className="para-one">
            House on the Clouds offers a rare retreat above the clouds — a
            boutique homestay surrounded by the majesty of the Himalayas and the
            timeless spirit of Spiti. Experience unparalleled hospitality where
            every sunrise paints a new masterpiece across endless mountain
            vistas.
          </p>
        </div>
        <video
          className="bg-video-one"
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => {
            console.error("Hotel video error:", e.target.error);
            e.target.style.display = "none";
          }}
        >
          <source src="/videos/landing-hotel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Side-by-side Experience Section */}
      <section
        className={`experience-section ${
          isVisible["experience-section"] ? "animate-in" : ""
        }`}
        id="experience-section"
      >
        <div className="fullscreen-image-container">
          <img
            src="/images/landing-experience-1.jpg"
            alt="House on the Clouds experience"
            className="fullscreen-image"
            loading="lazy"
          />
        </div>
        <div className="image-text-overlay">
          <div className="text-content">
            <p className="combined-text">
              House on the Clouds is not a hotel — it is an experience. Set
              amidst quiet landscapes, House on the Clouds invites you to pause
              and reconnect with nature's pristine beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-side Room Section */}
      <section
        className={`room-section ${
          isVisible["room-section"] ? "animate-in" : ""
        }`}
        id="room-section"
      >
        <div className="image-text-overlay">
          <div className="text-content">
            <p className="combined-text">
              Each room is thoughtfully designed, inspired by local Spiti
              architecture and crafted to provide comfort while honoring the
              cultural heritage of this mystical land.
            </p>
          </div>
        </div>
        <div className="fullscreen-image-container">
          <img
            src="/images/landing-room-1.jpg"
            alt="Spiti architecture inspired rooms"
            className="fullscreen-image"
            loading="lazy"
          />
        </div>
      </section>

      <section className="experiences-section">
        <div className="experiences-heading">
          <h2>Experience at House on the Clouds</h2>
        </div>
      </section>

      {/* Background Image Section with Text Overlay */}
      <section
        className={`local-welcome-section ${
          isVisible["local-welcome-section"] ? "animate-in" : ""
        }`}
        id="local-welcome-section"
      >
        <div className="text-content-image">
          <h3 className="local-welcome-title">Local Welcome</h3>
          <p className="outdoor-breakfast-text">
            Step into the warmth of Himachali traditions, where heartfelt smiles
            and genuine hospitality embrace you like family, creating memories
            that last a lifetime.
          </p>
        </div>
      </section>

      {/* Existing Split Sections */}
      <section
        className={`bonfire-section ${
          isVisible["bonfire-section"] ? "animate-in" : ""
        }`}
        id="bonfire-section"
      >
        <div className="bonfire-container">
          <div className="bonfire-image">
            <img
              src="/images/landing-bonfire-1.jpg"
              alt="Bonfire under the stars"
              className="bonfire-img"
              loading="lazy"
            />
          </div>
          <div className="bonfire-content">
            <h3 className="bonfire-title">Bonfire Nights</h3>
            <p className="bonfire-text">
              Under a blanket of stars more brilliant than city lights could
              ever be, gather by the crackling fire as mountain nights weave
              stories, laughter, and timeless memories that warm your soul long
              after the flames fade.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`outdoor-breakfast-section ${
          isVisible["outdoor-breakfast-section"] ? "animate-in" : ""
        }`}
        id="outdoor-breakfast-section"
      >
        <div className="outdoor-breakfast-container">
          <div className="outdoor-breakfast-content">
            <h3 className="outdoor-breakfast-title">Outdoor Breakfast</h3>
            <p className="outdoor-breakfast-text">
              Awaken to crisp mountain air and golden sunlight painting the
              peaks, savoring a delightful breakfast amidst nature's open
              embrace while eagles soar overhead and prayer flags flutter in the
              gentle breeze.
            </p>
          </div>
          <div className="outdoor-breakfast-image">
            <img
              src="/images/landing-outdoor-breakfast-1.jpg"
              alt="Outdoor breakfast in the mountains"
              className="outdoor-breakfast-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Another Background Text Section - Add your image */}
      <section
        className={`background-text-section ${
          isVisible["background-text-section"] ? "animate-in" : ""
        }`}
        id="background-text-section"
      >
        <div className="text-content-image">
          <h3 className="local-welcome-title">Mountain Meditation</h3>
          <p className="outdoor-breakfast-text">
            Find your inner peace surrounded by the ancient wisdom of the
            mountains. Let the silence of the peaks guide you to moments of
            profound tranquility and self-discovery.
          </p>
        </div>
      </section>

      <section
        className={`bonfire-section ${
          isVisible["river-breakfast-section"] ? "animate-in" : ""
        }`}
        id="river-breakfast-section"
      >
        <div className="bonfire-container">
          <div className="bonfire-image">
            <img
              src="/images/landing-river-breakfast-1.jpg"
              alt="River breakfast with mountain views"
              className="bonfire-img"
              loading="lazy"
            />
          </div>
          <div className="bonfire-content">
            <h3 className="bonfire-title">River Breakfast</h3>
            <p className="bonfire-text">
              Indulge in a serene mountain breakfast by the flowing river, where
              rugged landscapes meet endless skies, and every sip is savored
              with breathtaking views that remind you of nature's infinite
              beauty.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`explore-section ${
          isVisible["explore-section"] ? "animate-in" : ""
        }`}
        id="explore-section"
      >
        <h2 className="explore-title">Discover the Mystical Land Around Us</h2>
        <div className="explore-grid">
          {Places.map((place, index) => (
            <div
              key={index}
              className="explore-card"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => openPopup(place)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openPopup(place);
                }
              }}
              aria-label={`Explore ${place.name}`}
            >
              <img
                src={place.image}
                alt={place.name}
                className="explore-thumb"
                loading="lazy"
              />
              <div className="hover-overlay">
                <span>Click to Explore</span>
              </div>
              <div className="place-name">{place.name}</div>
            </div>
          ))}
        </div>

        {selectedPlace && (
          <div
            className="popup-overlay"
            onClick={closePopup}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="popup-image"
                loading="lazy"
              />
              <h3 id="popup-title">{selectedPlace.name}</h3>
              <p>{selectedPlace.description}</p>
              <button
                className="close-btn"
                onClick={closePopup}
                aria-label="Close popup"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <section
        id="contact"
        className={`hotc-section ${
          isVisible["hotc-section"] ? "animate-in" : ""
        }`}
      >
        <div className="hero-content">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">
            We'd love to hear from you and help plan your perfect stay
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="success-message">
            <div className="success-icon"></div>
            <div>
              <strong>Thank you!</strong> Your message has been sent
              successfully. We'll get back to you within 24 hours.
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="error-message">
            <div className="error-icon"></div>
            <div>
              <strong>Oops!</strong> Something went wrong. Please try again or
              contact us directly.
            </div>
          </div>
        )}

        <div className="hotc-container">
          <div className="contact-form-container fade-in-left">
            <div className="form-header">
              <h2>Send us a Query</h2>
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </div>

            <form
              className="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="85aada83-8439-41db-8412-944ae56aa0bb"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission - House on the Clouds"
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell us about your requirements, questions, or any special requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  "SEND QUERY"
                )}
              </button>
            </form>
          </div>

          <div className="hotc-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5445026284897!2d77.98247847200939!3d32.34439881647555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3906a952f92a494f%3A0x1b3c31382fd3f7b5!2sHouse%20on%20the%20Clouds%20Spiti!5e1!3m2!1sen!2sin!4v1755552949588!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="House on the Clouds Location"
            ></iframe>
          </div>
        </div>

        <div className="landing-common-area-images">
          <div className="common-area-image-container">
            <img
              src="/images/landing-common-1.jpg"
              alt="Cozy Lounge Area"
              className="common-area-image"
              loading="lazy"
            />
          </div>

          <div className="common-area-image-container">
            <img
              src="/images/landing-common-2.jpg"
              alt="Living Room with Mountain Views"
              className="common-area-image"
              loading="lazy"
            />
          </div>

          <div className="common-area-image-container">
            <img
              src="/images/landing-common-3.jpg"
              alt="Warm Common Area"
              className="common-area-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
