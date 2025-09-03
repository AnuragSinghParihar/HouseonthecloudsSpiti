import React, { useState } from 'react';
import './Accommodation.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Accomodation = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };
  return (
    <div className="stay-page">
      <Navbar />
      
      <section className='accommodation-image-section'>
        <div className="accommodation-image-container">
          <div className="accommodation-image">
            <img 
              src="images/DSC04783-HDR.jpg" 
              alt="Accommodation room" 
              className="accommodation-img"
            />
          </div>

        </div>
      </section>
      <section className="elegant-text-section">
        <div className="elegant-text-container">
          <h2 className="elegant-top-text">STAY WITH US</h2>
          <div className="elegant-separator"></div>
          <h1 className="elegant-bottom-text">Your house above the clouds at 13,500 ft</h1>
        </div>
      </section>
      <section className="additional-room-image-section">
        <div className="additional-room-text">
          <p className="room-description-text">
            A serene mountain retreat where elegance meets comfort—this room features large windows that open to breathtaking valley views, a cozy seating corner perfect for slow mornings, and warm wooden interiors that blend modern design with natural charm.
          </p>
        </div>
        <div className="additional-room-image-container">
          <img 
            src="/images/DSC03941-HDR.jpg" 
            alt="Room with Mountain View" 
            className="additional-room-image"
          />
        </div>
      </section>
      <section className="third-image-section">
        <div className="third-image-container">
          <img 
            src="/images/DSC05934-HDR.jpg" 
            alt="Bedroom with Mountain Views" 
            className="third-room-image"
          />
        </div>
      </section>
      <section className="fourth-image-section">
        <div className="fourth-image-container">
          <img 
            src="/images/DSC05939-HDR.jpg" 
            alt="Bedroom with Accent Wall" 
            className="fourth-room-image"
          />
        </div>
        <div className="fourth-room-text">
          <p className="fourth-room-description-text">
            Inspired by the natural palette of Spiti, this room blends earthy textures with modern elegance. The handcrafted wall design and warm accents reflect the valley's rugged beauty, while plush bedding and soft tones create a serene retreat in the heart of Chicham.
          </p>
        </div>
      </section>
      <section className="fifth-image-section">
        <div className="fifth-room-text">
          <p className="fifth-room-description-text">
            Experience luxury in every detail with our thoughtfully designed bathroom. Featuring modern fixtures, elegant tile work, and a window that frames the stunning mountain landscape, this space combines comfort with the breathtaking views that make House on the Clouds truly special.
          </p>
        </div>
        <div className="fifth-image-container">
          <img 
            src="/images/4e11b3c0-a26a-4894-92e2-e821e57235f0-copy.JPG" 
            alt="Bathroom with Mountain View" 
            className="fifth-room-image"
          />
        </div>
      </section>
      <section className="features-section">
        <div className="features-left-image">
          <img 
            src="/images/IMG_9387 2.JPG" 
            alt="Bedroom with Mountain Views" 
            className="features-image"
          />
        </div>
        
        <div className="features-text-center">
          <h3 className="features-title">HOUSE ON THE CLOUDS FEATURES</h3>
          <h2 className="features-heading">During your stay you'll experience...</h2>
          <ul className="features-list">
            <li>King-sized beds with premium linens</li>
            <li>Ensuite bathrooms with hot water</li>
            <li>Locally inspired decor & handcrafted details</li>
            <li>Panoramic mountain views</li>
            <li>Heating arrangements for colder months</li>
            <li>Complimentary Wi-Fi (where available)</li>
          </ul>
        </div>
        
        <div className="features-right-image">
          <img 
            src="/images/IMG_0452 2.jpg" 
            alt="Ornate Copper Teapot" 
            className="features-image"
          />
        </div>
      </section>

      <section className="fullscreen-building-section">
        <div className="fullscreen-building-container">
          <img 
            src="/images/77643edc-cc76-471b-a531-9add469e9b0e 3.jpg" 
            alt="House on the Clouds - Traditional Building" 
            className="fullscreen-building-image"
          />
        </div>
      </section>

      <section className="common-area-section"><br/><br/>
        <div className="common-area-header">
          <h2 className="common-area-title">Common Areas</h2>
          <p className="common-area-subtitle">Spaces designed for connection and relaxation</p>
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        <div className="common-area-images">
          <div className="common-area-image-container">
            <img 
              src="/images/IMG_9385.JPG" 
              alt="Cozy Lounge Area" 
              className="common-area-image"
            />
          </div>
          
          <div className="common-area-image-container">
            <img 
              src="/images/IMG_1693.JPG" 
              alt="Living Room with Mountain Views" 
              className="common-area-image"
            />
          </div>
          
          <div className="common-area-image-container">
            <img 
              src="/images/b14689ac-fcc6-446a-bd67-2d248bbe4210 5.JPG" 
              alt="Warm Common Area" 
              className="common-area-image"
            />
          </div>
        </div>
      </section><br/><br/>

      <section className="hotel-info-section">
        <div className="hotel-info-header">
          <h2 className="hotel-info-title">Hotel & Room Information</h2>
          <p className="hotel-info-subtitle">Information for your stay at House on the Clouds</p>
        </div>
        
        <div className="hotel-info-container">
          <div className="info-item">
            <div className="info-header" onClick={() => toggleItem(0)}>
              <span className="info-number">01</span>
              <h3 className="info-title">CANCELLATION & REFUND POLICY</h3>
              <span className={`info-toggle ${openItem === 0 ? 'active' : ''}`}>{openItem === 0 ? '×' : '+'}</span>
            </div>
            <div className={`info-content ${openItem === 0 ? 'active' : ''}`}>
              <p>The refund timeline typically takes 1 to 7 business days once a guest cancels their reservation.</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-header" onClick={() => toggleItem(1)}>
              <span className="info-number">02</span>
              <h3 className="info-title">PAYMENT POLICY</h3>
              <span className={`info-toggle ${openItem === 1 ? 'active' : ''}`}>{openItem === 1 ? '×' : '+'}</span>
            </div>
            <div className={`info-content ${openItem === 1 ? 'active' : ''}`}>
              <p>All bills must be settled upon presentation. Personal cheques are not accepted.</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-header" onClick={() => toggleItem(2)}>
              <span className="info-number">03</span>
              <h3 className="info-title">CHECK-IN & CHECK OUT</h3>
              <span className={`info-toggle ${openItem === 2 ? 'active' : ''}`}>{openItem === 2 ? '×' : '+'}</span>
            </div>
            <div className={`info-content ${openItem === 2 ? 'active' : ''}`}>
              <p><strong>Check-In Time:</strong> 12:00 PM<br/>
              <strong>Check-Out Time:</strong> 11:00 AM</p>
              <p>Early check-in and late check-out can be arranged based on availability. Please inform us of your expected arrival time. We provide airport transfers and can arrange local transportation upon request.</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-header" onClick={() => toggleItem(3)}>
              <span className="info-number">04</span>
              <h3 className="info-title">RATES</h3>
              <span className={`info-toggle ${openItem === 3 ? 'active' : ''}`}>{openItem === 3 ? '×' : '+'}</span>
            </div>
            <div className={`info-content ${openItem === 3 ? 'active' : ''}`}>
              <p>Rates vary by season and room type. Peak season: ₹8,000-15,000 per night. Off-season: ₹6,000-12,000 per night. All rates include breakfast and taxes.</p>
              <p><strong>Important:</strong> Room charges exclude applicable taxes and additional services. Guests are advised to contact the Duty Manager for detailed information.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accomodation;
