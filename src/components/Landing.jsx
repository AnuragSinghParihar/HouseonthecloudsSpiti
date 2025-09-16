import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Landing = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Places = [
    {
      name: 'Key Monastery',
      image: "/images/IMG_0214 3.JPG",
      description: `Perched dramatically on a hilltop, Key Monastery is the largest and oldest Buddhist monastery in the Spiti Valley. 
      With centuries-old murals, sacred scriptures, and peaceful monks, it's not just a spiritual site but a cultural experience. 
      The view of the Spiti River and valley from the top is simply breathtaking — a must-visit for history lovers and soul seekers.`,
    },
    {
      name: 'Chicham Bridge',
      image: "/images/IMG_0218 3.jpg",
      description: `Chicham Bridge holds the record as Asia's highest suspension bridge, suspended over a gorge 1,000 feet deep. 
      Connecting remote mountain villages, this engineering marvel offers spectacular views and a thrilling experience. 
      Walking or driving across it gives you an adrenaline rush and a chance to click some truly Instagram-worthy shots.`,
    },
    {
      name: 'Langza Buddha Statue',
      image: "/images/IMG_4948.JPG",
      description: `Overlooking the Trans-Himalayas, the giant seated Buddha of Langza gazes peacefully at the valley below. 
      It's a symbol of harmony and heritage, surrounded by fossil-rich mountains and traditional mud houses. 
      Sunsets here are magical, casting golden hues across the peaks — making it a photographer's and meditator's dream alike.`,
    },
  ];

  const openPopup = (place) => {
    setSelectedPlace(place);
  };

  const closePopup = () => {
    setSelectedPlace(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            console.error('Background video error:', e.target.error || 'Unknown error');
            e.target.style.display = 'none';
          }}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onPlay={() => console.log('Video started playing')}
        >
          <source src="/videos/landing-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Navbar />

        <div className='writting'>
          <h6 className='heading-one'>SPITI VALLEY</h6>
          <h2 className='heading-two'>A place to pause, breathe and belong</h2>
          <h1 className='heading-three'>House on the Clouds</h1>
        </div>
      </div>

      <section className='hero'>
        <div className='after-hero'>
            <h6 className='heading-one-hero'>SPITI VALLEY</h6>
            <h1 className='heading-main-two'>One of the World's Highest Boutique Stays<br/> <i>Perched at 13,615 ft in Chicham, Spiti Valley</i></h1>
            <p className='para-one'>House on the Clouds offers a rare retreat above the clouds — a boutique homestay surrounded by the majesty of the Himalayas and the timeless spirit of Spiti.</p>
        </div>
        <div className="HOTEL-VIDEO">
            <video
            className="bg-video-one"
            autoPlay
            muted
            loop
            playsInline
            >
            <source src="/videos/landing-hotel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div> 
      </section>

      <section className='experience-section'>
      <div className="fullscreen-image-container">
          <img 
            src="/images/landing-experience-1.jpg" 
            alt="House on the Clouds is not a hotel — it is an experience" 
            className="fullscreen-image"
          />
          <div className="image-text-overlay">
            <div className="text-content">
              <p className="combined-text">House on the Clouds is not a hotel — it is an experience. Set amidst quiet landscapes, House on the Clouds invites you to pause and reconnect.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='room-section'>
        <div className="fullscreen-image-container">
          <img 
            src="/images/landing-room-1.jpg" 
            alt="Each room is thoughtfully designed inspired by local Spiti architecture" 
            className="fullscreen-image"
          />
          <div className="image-text-overlay">
            <div className="text-content">
              <p className="combined-text">Each room is thoughtfully designed inspired by local Spiti architecture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='experiences-section'>
        <div className="experiences-heading">
          <h2>Experience at House on the Clouds</h2>
        </div>
      </section>

      <section className='local-welcome-section'>
        <div className="fullscreen-image-container">
          <img 
            src="/images/landing-local-welcome-1.jpg" 
            alt="Local Welcome - Himachali traditions and hospitality" 
            className="fullscreen-image"
          />
          <div className="image-text-overlay">
            <div className="text-content-image">
                <h3 className='local-welcome-title'>Local Welcome</h3>
              <p className="outdoor-breakfast-text">Step into the warmth of Himachali traditions, where heartfelt smiles and genuine hospitality embrace you like family.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bonfire-section'>
        <div className="bonfire-container">
          <div className="bonfire-image">
            <img 
              src="/images/landing-bonfire-1.jpg" 
              alt="Bonfire under the stars" 
              className="bonfire-img"
            />
          </div>
          <div className="bonfire-content">
            <h3 className='bonfire-title'>Bonfire</h3>
            <p className="bonfire-text">Under a blanket of stars, gather by the crackling fire as mountain nights weave stories, laughter, and timeless memories.</p>
          </div>
        </div>
      </section>

      <section className='outdoor-breakfast-section'>
        <div className="outdoor-breakfast-container">
          <div className="outdoor-breakfast-content">
            <h3 className='outdoor-breakfast-title'>Outdoor Breakfast</h3>
            <p className="outdoor-breakfast-text">Awaken to crisp mountain air and golden sunlight, savoring a delightful breakfast amidst nature's open embrace.</p>
          </div>
          <div className="outdoor-breakfast-image">
            <img 
              src="/images/landing-outdoor-breakfast-1.jpg" 
              alt="Outdoor breakfast in the mountains" 
              className="outdoor-breakfast-img"
            />
          </div>
        </div>
      </section>

      <section className='bonfire-section'>
        <div className="bonfire-container">
          <div className="bonfire-image">
            <img 
              src="/images/landing-river-breakfast-1.jpg" 
              alt="Bonfire under the stars" 
              className="bonfire-img"
            />
          </div>
          <div className="bonfire-content">
            <h3 className='bonfire-title'>River Breakfast</h3>
            <p className="bonfire-text">Indulge in a serene mountain breakfast, where rugged landscapes meet endless skies, and every sip is savored with breathtaking views.</p>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <h2 className="explore-title">Get to Know Our Land</h2>
        <div className="explore-grid">
          {Places.map((place, index) => (
            <div key={index} className="explore-card" style={{ animationDelay: `${index * 100}ms` }} onClick={() => openPopup(place)}>
              <img src={place.image} alt={place.name} className="explore-thumb" />
              <div className="hover-overlay">Click to Explore</div>
              <div className="place-name">{place.name}</div>
            </div>
          ))}
        </div>

        {selectedPlace && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedPlace.image} alt={selectedPlace.name} className="popup-image" />
              <h3>{selectedPlace.name}</h3>
              <p>{selectedPlace.description}</p>
              <button className="close-btn" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </section>
      <section id="contact" className="hotc-section" style={{ backgroundColor: '#f8f4f0', padding: '80px 0', margin: '0' }}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="hero-content">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">We'd love to hear from you and help plan your perfect stay</p>
        </div>
            
        <div className="hotc-container" style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'space-between',
          width: '100%', 
          height: 'auto',
          minHeight: 'auto',
          padding: '2rem', 
          margin: '0',
          gap: '3rem',
          overflow: 'visible'
        }}>
          <div className="contact-form-container fade-in-left" style={{ 
            flex: '0 1 50%', 
            background: '#f8f4f0', 
            padding: '2.5rem', 
            borderRadius: '15px', 
            border: '2px solid #e0e0e0', 
            height: 'auto',
            minHeight: 'auto',
            display: 'flex', 
            flexDirection: 'column',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            overflow: 'visible'
          }}>
            <div className="form-header" style={{ 
              textAlign: 'center', 
              marginBottom: '2rem',
              paddingTop: '0',
              marginTop: '0'
            }}>
              <h2 style={{ 
                fontSize: '2.2rem', 
                fontWeight: '700', 
                color: '#4a1818', 
                marginBottom: '0.5rem',
                marginTop: '0',
                fontFamily: "'Playfair Display', serif"
              }}>Send us a Query</h2>
              <p style={{ 
                fontSize: '1rem', 
                color: '#666', 
                margin: '0',
                fontFamily: "'Poppins', sans-serif"
              }}>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              flex: '1',
              overflow: 'visible'
            }}>
              <input type="hidden" name="access_key" value="85aada83-8439-41db-8412-944ae56aa0bb" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <input type="hidden" name="subject" value="New Contact Form Submission - House on the Clouds" />
              
              <div className="form-row" style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="name" style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#4a1818', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif"
                  }}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    style={{ 
                      padding: '1rem', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'all 0.3s ease',
                      color: '#000000',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>
                
                <div className="form-group" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="email" style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#4a1818', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif"
                  }}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    style={{ 
                      padding: '1rem', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'all 0.3s ease',
                      color: '#000000',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div className="form-row" style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="phone" style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#4a1818', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif"
                  }}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    style={{ 
                      padding: '1rem', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'all 0.3s ease',
                      color: '#000000',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>
                
                <div className="form-group" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="subject" style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#4a1818', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif"
                  }}>Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    style={{ 
                      padding: '1rem', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      color: '#000000',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="availability">Availability Check</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="amenities">Amenities & Services</option>
                    <option value="directions">Directions & Location</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row" style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="checkIn" style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#4a1818', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif"
                  }}>Check-in Date</label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    style={{ 
                      padding: '1rem', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'all 0.3s ease',
                      color: '#000000',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>
                
                <div className="form-group" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="checkOut" style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#4a1818', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif"
                  }}>Check-out Date</label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    style={{ 
                      padding: '1rem', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'all 0.3s ease',
                      color: '#000000',
                      backgroundColor: '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div className="form-row" style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="guests" style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#4a1818', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif"
                  }}>Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    style={{ 
                      padding: '1rem', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      color: '#000000',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
                
                <div className="form-group" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="roomPreference" style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#4a1818', 
                    marginBottom: '0.5rem',
                    fontFamily: "'Poppins', sans-serif"
                  }}>Room Preference</label>
                  <select
                    id="roomPreference"
                    name="roomPreference"
                    style={{ 
                      padding: '1rem', 
                      border: '2px solid #e0e0e0', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      fontFamily: "'Poppins', sans-serif",
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      color: '#000000',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="">Select room preference</option>
                    <option value="dawa">Dawa (Moon)</option>
                    <option value="sprin">Sprin (Clouds)</option>
                    <option value="yul">Yul (Village)</option>
                    <option value="riwo">Riwo (Mountain)</option>
                    <option value="kha">Kha (Snow)</option>
                    <option value="namkha">Namkha (Sky)</option>
                    <option value="kora">Kora (The Circle)</option>
                    <option value="any">Any Available Room</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="message" style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: '600', 
                  color: '#4a1818', 
                  marginBottom: '0.5rem',
                  fontFamily: "'Poppins', sans-serif"
                }}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell us about your requirements, questions, or any special requests..."
                  style={{ 
                    padding: '1rem', 
                    border: '2px solid #e0e0e0', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    fontFamily: "'Poppins', sans-serif",
                    resize: 'vertical', 
                    minHeight: '120px',
                    transition: 'all 0.3s ease',
                    color: '#000000',
                    backgroundColor: '#ffffff'
                  }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
                style={{ 
                  background: 'linear-gradient(135deg, #B61F1F 0%, #8a1a1a 100%)',
                  color: 'white', 
                  border: 'none', 
                  padding: '1rem 2rem', 
                  borderRadius: '8px', 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  cursor: 'pointer', 
                  width: '100%', 
                  marginTop: '1rem',
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'SEND QUERY'
                )}
              </button>
            </form>
          </div>
          
          <div className="hotc-map" style={{ 
            flex: '0 1 50%', 
            height: '800px',
            borderRadius: '15px', 
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '2px solid #e0e0e0',
            boxSizing: 'border-box',
            marginLeft: 'auto',
            alignSelf: 'flex-start'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5445026284897!2d77.98247847200939!3d32.34439881647555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3906a952f92a494f%3A0x1b3c31382fd3f7b5!2sHouse%20on%20the%20Clouds%20Spiti!5e1!3m2!1sen!2sin!4v1755552949588!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="House on the Clouds Location"
            ></iframe>
          </div>
        </div>
        
        <div className="common-area-images">
          <div className="common-area-image-container">
            <img 
              src="/images/landing-common-1.jpg" 
              alt="Cozy Lounge Area" 
              className="common-area-image"
            />
          </div>
          
          <div className="common-area-image-container">
            <img 
              src="/images/landing-common-2.jpg" 
              alt="Living Room with Mountain Views" 
              className="common-area-image"
            />
          </div>
          
          <div className="common-area-image-container">
            <img 
              src="/images/landing-common-3.jpg" 
              alt="Warm Common Area" 
              className="common-area-image"
            />
          </div>
        </div>
      </section>
      
      

      <Footer />
    </>
  );
};

export default Landing;
