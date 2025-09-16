import React from "react";
import "./Journey.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Journey = () => {
  return (
    <div className="journey-page">
      <Navbar />

      <section className="blessed-section">
        <div className="blessed-container">
          <div className="blessed-image">
            <img
              src="/images/journey-blessed.JPG"
              alt="Blessed beginning - Lama visit"
              className="blessed-img"
            />
          </div>
          <div className="blessed-content">
            <h3 className="blessed-title">A Blessed Beginning</h3>
            <p className="blessed-text">
              A blessing to our space — when the Lama visited, his presence wove
              peace and spirit into our home.
            </p>
          </div>
        </div>
      </section>

      <section className="lamas-blessing-section">
        <div className="lamas-blessing-container">
          <div className="lamas-blessing-content">
            <h3 className="lamas-blessing-title">The Lama's blessing</h3>
            <p className="lamas-blessing-text">
              A moment that infused the space with calm, purpose, and sacred
              energy. His visit marked the beginning of our journey to shape
              this house into a place of healing and connection.
            </p>
          </div>
          <div className="lamas-blessing-image">
            <img
              src="/images/journey-1.jpg"
              alt="Lama's blessing moment"
              className="lamas-blessing-img"
            />
          </div>
        </div>
      </section>

      <section className="collaboration-section">
        <div className="collaboration-container">
          <div className="collaboration-image">
            <img
              src="/images/journey-2.JPG"
              alt="House on the Clouds collaboration"
              className="collaboration-img"
            />
          </div>
          <div className="collaboration-content">
            <h3 className="collaboration-title">House on the Clouds</h3>
            <p className="collaboration-text">
              House on the Clouds is a collaboration of two worlds – Amit, an
              explorer and nature enthusiast, bringing vision and curiosity, and
              Tenzin Zigamd, a local owner rooted in Spiti's traditions.
              Together, they weave hospitality with culture, creating a stay
              that feels both adventurous and deeply grounded.
            </p>
          </div>
        </div>
      </section>

      <section className="sanctuary-section">
        <div className="sanctuary-container">
          <div className="sanctuary-content">
            <h3 className="sanctuary-title">A Sanctuary Under the Stars</h3>
            <p className="sanctuary-text">
              As the sun sets over the majestic Himalayas, our House on the
              Clouds transforms into a magical sanctuary bathed in moonlight.
              The warm glow from our windows creates a beacon of comfort against
              the vast mountain landscape, inviting weary travelers to find rest
              and rejuvenation.
            </p>
            <p className="sanctuary-text">
              The traditional decorative elements adorning our entrance, with
              their vibrant colors and cultural significance, stand as a
              testament to the rich heritage of Himachal Pradesh.
            </p>
          </div>
          <div className="sanctuary-image">
            <img
              src="/images/journey-3.jpg"
              alt="Sanctuary under the stars"
              className="sanctuary-img"
            />
          </div>
        </div>
      </section>

      <section className="stories-section">
        <div className="stories-container">
          <div className="stories-image">
            <img
              src="/images/journey-4.JPG"
              alt="Where stories come alive"
              className="stories-img"
            />
          </div>
          <div className="stories-content">
            <h3 className="stories-title">Where Stories Come Alive</h3>
            <p className="stories-text">
              In our warm and inviting common spaces, guests from around the
              world gather to share stories, experiences, and moments of
              connection. The presence of local spiritual leaders and community
              members creates an atmosphere of cultural exchange and authentic
              Himalayan hospitality.
            </p>
            <p className="stories-text">
              Over traditional tea and local delicacies, friendships are forged
              and memories are made.
            </p>
          </div>
        </div>
        <div className="three-image-section">
          <div className="three-image-container">
            <h3 className="three-heading-above">
              Mud sourced from spiti valley
            </h3>
            <div className="three-images-row">
              <div className="three-image-item first-image">
                <img
                  src="/images/journey-5.PNG"
                  alt="Construction Work"
                  className="three-image"
                />
              </div>
              <div className="three-image-item second-image">
                <img
                  src="/images/journey-6.jpg"
                  alt="Bedroom Interior"
                  className="three-image"
                />
              </div>
              <div className="three-image-item third-image">
                <img
                  src="/images/journey-7.PNG"
                  alt="Wall Construction"
                  className="three-image"
                />
              </div>
              <div className="three-text-right-top">
                <p className="three-copy">
                  At House on the Clouds, every wall tells a story of the land.
                  The mud used in our architecture is sourced directly from the
                  valley, in its natural palette of warm earth tones, bringing
                  the mountains into every corner of our home.
                </p>
              </div>
              <div className="three-text-left-bottom">
                <p className="three-copy">
                  At House on the Clouds, every wall tells a story of the land.
                  The mud used in our architecture is sourced directly from the
                  valley, in its natural palette of warm earth tones, bringing
                  the mountains into every corner of our home.
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
