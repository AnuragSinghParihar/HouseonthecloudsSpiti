import React from "react";
import "./Journey.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Journey = () => {
  return (
    <div className="journey-page">
      <Navbar />

      <section className="journey-blessed-section">
        <div className="journey-blessed-container">
          <div className="journey-blessed-image">
            <img
              src="/images/journey-blessed.JPG"
              alt="Blessed beginning - Lama visit"
              className="journey-blessed-img"
              loading="lazy"
            />
          </div>
          <div className="journey-blessed-content">
            <h3 className="journey-blessed-title">A Blessed Beginning</h3>
            <p className="journey-blessed-text">
              A blessing to our space — when the Lama visited, his presence wove
              peace and spirit into our home.
            </p>
          </div>
        </div>
      </section>

      <section className="journey-lamas-blessing-section">
        <div className="journey-lamas-blessing-container">
          <div className="journey-lamas-blessing-content">
            <h3 className="journey-lamas-blessing-title">
              The Lama's Blessing
            </h3>
            <p className="journey-lamas-blessing-text">
              A moment that infused the space with calm, purpose, and sacred
              energy. His visit marked the beginning of our journey to shape
              this house into a place of healing and connection.
            </p>
          </div>
          <div className="journey-lamas-blessing-image">
            <img
              src="/images/journey-1.jpg"
              alt="Lama's blessing moment"
              className="journey-lamas-blessing-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="journey-collaboration-section">
        <div className="journey-collaboration-container">
          <div className="journey-collaboration-image">
            <img
              src="/images/journey-2.JPG"
              alt="House on the Clouds collaboration"
              className="journey-collaboration-img"
              loading="lazy"
            />
          </div>
          <div className="journey-collaboration-content">
            <h3 className="journey-collaboration-title">House on the Clouds</h3>
            <p className="journey-collaboration-text">
              House on the Clouds is a collaboration of two worlds – Amit, an
              explorer and nature enthusiast, bringing vision and curiosity, and
              Tenzin Zigamd, a local owner rooted in Spiti's traditions.
              Together, they weave hospitality with culture, creating a stay
              that feels both adventurous and deeply grounded.
            </p>
          </div>
        </div>
      </section>

      <section className="journey-sanctuary-section">
        <div className="journey-sanctuary-container">
          <div className="journey-sanctuary-content">
            <h3 className="journey-sanctuary-title">
              A Sanctuary Under the Stars
            </h3>
            <p className="journey-sanctuary-text">
              As the sun sets over the majestic Himalayas, our House on the
              Clouds transforms into a magical sanctuary bathed in moonlight.
              The warm glow from our windows creates a beacon of comfort against
              the vast mountain landscape, inviting weary travelers to find rest
              and rejuvenation.
            </p>
            <p className="journey-sanctuary-text">
              The traditional decorative elements adorning our entrance, with
              their vibrant colors and cultural significance, stand as a
              testament to the rich heritage of Himachal Pradesh.
            </p>
          </div>
          <div className="journey-sanctuary-image">
            <img
              src="/images/journey-3.jpg"
              alt="Sanctuary under the stars"
              className="journey-sanctuary-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="journey-stories-section">
        <div className="journey-stories-container">
          <div className="journey-stories-image">
            <img
              src="/images/journey-4.JPG"
              alt="Where stories come alive"
              className="journey-stories-img"
              loading="lazy"
            />
          </div>
          <div className="journey-stories-content">
            <h3 className="journey-stories-title">Where Stories Come Alive</h3>
            <p className="journey-stories-text">
              In our warm and inviting common spaces, guests from around the
              world gather to share stories, experiences, and moments of
              connection. The presence of local spiritual leaders and community
              members creates an atmosphere of cultural exchange and authentic
              Himalayan hospitality.
            </p>
            <p className="journey-stories-text">
              Over traditional tea and local delicacies, friendships are forged
              and memories are made.
            </p>
          </div>
        </div>

        <div className="journey-three-image-section">
          <div className="journey-three-image-container">
            {/* Left Column - Images */}
            <div className="journey-three-images-column">
              <div className="journey-three-images-row">
                <div className="journey-three-image-item">
                  <img
                    src="/images/journey-5.PNG"
                    alt="Construction Work"
                    className="journey-three-image"
                    loading="lazy"
                  />
                </div>
                <div className="journey-three-image-item">
                  <img
                    src="/images/journey-6.jpg"
                    alt="Bedroom Interior"
                    className="journey-three-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="journey-three-single-image">
                <div className="journey-three-image-item">
                  <img
                    src="/images/journey-7.PNG"
                    alt="Wall Construction"
                    className="journey-three-image"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Placeholder for additional image */}
              <div className="journey-three-image-item journey-image-placeholder"></div>
            </div>

            {/* Right Column - Content */}
            <div className="journey-three-content-column">
              <h3 className="journey-three-heading-above">
                Mud Sourced From Spiti Valley
              </h3>

              <div className="journey-three-quote">
                Every wall tells a story of the land
              </div>

              <div className="journey-three-description">
                <p className="journey-three-copy">
                  At House on the Clouds, the mud used in our architecture is
                  sourced directly from the valley, in its natural palette of
                  warm earth tones, bringing the mountains into every corner of
                  our home.
                </p>
                <p className="journey-three-copy">
                  This authentic building approach creates a living space that
                  breathes with the rhythm of the mountains, where traditional
                  craftsmanship meets modern comfort in perfect harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journey;
