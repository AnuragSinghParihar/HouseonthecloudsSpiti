import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [activeSection, setActiveSection] = useState("hotel");

  // Hotel images
  const hotelImages = [
    "/images/journey-3.jpg",
    "/images/landing-common-3.jpg",
    "/images/gallery-hotel-1.jpg",
    "/images/landing-room-1.jpg",
    "/images/gallery-hotel-2.jpg",
    "/images/gallery-hotel-3.jpg",
    "/images/gallery-hotel-4.jpg",
    "/images/gallery-hotel-5.jpg",
    "/images/accommodation-room-2.jpg",
    "/images/landing-common-2.jpg",
    "/images/gallery-hotel-6.jpg",
    "/images/landing-common-1.jpg",
    "/images/gallery-hotel-7.jpg",
    "/images/gallery-hotel-9.JPG",
  ];

  // Wildlife images
  const wildlifeImages = [
    "/images/gallery-animal-1.JPG",
    "/images/gallery-animal-2.JPG",
    "/images/gallery-animal-3.JPG",
    "/images/gallery-animal-4.JPG",
    "/images/gallery-animal-5.JPG",
  ];

  // landscape images
  const landscapeImages = [
    "/images/gallery-scape-1.JPG",
    "/images/gallery-scape-2.JPG",
    "/images/gallery-scape-3.JPG",
    "/images/gallery-scape-4.JPG",
    "/images/gallery-culture-1.JPG",
    "/images/gallery-scape-5.JPG",
    "/images/gallery-scape-6.JPG",
    "/images/landing-place-key-monastery.jpg",
    "/images/landing-place-chicham-bridge.jpg",
    "/images/gallery-scape-7.jpg",
    "/images/gallery-scape-8.JPG",
  ];

  const getImagesForSection = () => {
    switch (activeSection) {
      case "wildlife":
        return wildlifeImages;
      case "culture":
        return [];
      case "landscapes":
        return landscapeImages;
      case "hotel":
      default:
        return hotelImages;
    }
  };

  const allImagesForSection = getImagesForSection();

  // Get sharp grid item class
  const getSharpItemClass = (index) => {
    return `sharp-gallery-item sharp-item-${index + 1}`;
  };

  const sections = [
    { id: "hotel", name: "HOTEL", icon: "/images/hotel.png" },
    { id: "wildlife", name: "WILD ANIMALS", icon: "/images/israeli.png" },
    { id: "culture", name: "CULTURE", icon: "/images/rangoli.png" },
    { id: "landscapes", name: "LANDSCAPES", icon: "/images/river.png" },
  ];

  // Wildlife content data
  const wildlifeContent = [
    {
      title: "Bharal – The Mountain Companions",
      description:
        "Living in harmony on rugged cliffs, these Himalayan Blue Sheep symbolize resilience and kinship with the harsh mountain environment.",
    },
    {
      title: "Snow Leopard – Ghost of the Mountains",
      description:
        "Elusive and majestic, the snow leopard roams the high peaks with unmatched grace and stealth, embodying the wild spirit of Spiti.",
    },
    {
      title: "Himalayan Fox – Desert Wanderer",
      description:
        "Adapted to the harsh mountain environment, these foxes thrive in the most challenging conditions with remarkable intelligence.",
    },
    {
      title: "Golden Eagle – Sky Sovereign",
      description:
        "Master of the mountain winds, the golden eagle soars above the valleys with unmatched precision and commanding presence.",
    },
    {
      title: "Mountain Goat – Cliff Dancer",
      description:
        "Defying gravity with every step, these agile creatures navigate the most treacherous terrain with extraordinary balance.",
    },
  ];

  // Culture content data
  const cultureContent = [
    {
      title: "Spiritual Heritage",
      description:
        "In the shadow of century-old monasteries like Key and Tangyud—where murals, Thangka paintings, and sacred rituals echo—our region pulses with spiritual depth. Explore the monasteries, listen to the chants, and witness festivals held in harmony with the land's rhythms.",
      image: "/images/gallery-culture-1.JPG",
    },
    {
      title: "Celebrations & Traditions",
      description:
        "Join us during cultural highlights such as the Ladarcha fair in August, Spiti Losar in November, or winter solstice festivities. Each brings alive folk dances, seasonal fare, crafts, and narratives passed down through generations.",
      image: "/images/gallery-culture-2.jpeg",
    },
    {
      title: "Village Life & Local Soul",
      description:
        "Venture into Chicham and neighboring hamlets to meet families whose homes are built from earth, stone, and stories. Here, generosity is expressed through gestures—earthy thalis, shared tales, and the kind greeting, 'Julley,' meaning hello, thank you, and farewell.",
      image: "/images/gallery-culture-3.jpg",
    },
    {
      title: "High-Altitude Traditions",
      description:
        "Discover the pastoral life: yaks grazing alpine meadows, the rare Chumurti horse, and fields of barley and peas that sustain local life. All while embracing the blend of Buddhist devotion, shamanic rites, and ancient ethnic pride that defines the Bodh people's identity.",
      image: "/images/gallery-culture-4.jpg",
    },
    {
      title: "Experiences Tailored for You",
      description:
        "Enhance your stay with festival-timed tours, monastery visits, or immersive village walks. Sample local chhaang or arak, send postcards from Hikkim—the world's highest post office—or simply linger, absorbed by Spiti's timeless silence.",
      image: "/images/gallery-culture-5.jpg",
    },
  ];

  return (
    <div className="gallery-page">
      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="gallery-title">OUR GALLERY</h2>
            <p className="gallery-subtitle">
              Experience the breathtaking beauty of Spiti Valley through our
              carefully curated collection of moments, memories, and magnificent
              landscapes
            </p>
          </div>

          {/* Sharp Navigation Tabs */}
          <div className="gallery-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-tab ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="tab-icon">
                  <img
                    src={section.icon}
                    alt={section.name}
                    className="tab-icon-image"
                    onError={(e) => {
                      console.error(`Failed to load icon: ${section.icon}`);
                      e.target.style.display = "none";
                    }}
                  />
                </span>
                <span className="tab-name">{section.name}</span>
              </button>
            ))}
          </div>

          {/* Gallery Content Based on Active Section */}
          {activeSection === "hotel" && (
            <div className="sharp-edge-gallery">
              {hotelImages.map((image, index) => (
                <div key={index} className={getSharpItemClass(index)}>
                  <div className="sharp-image-container">
                    <img
                      src={image}
                      alt={`Luxury hotel experience ${index + 1}`}
                      className="sharp-gallery-image"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image}`);
                        e.target.style.display = "none";
                        e.target.parentElement.style.display = "none";
                      }}
                      onLoad={(e) => {
                        e.target.style.opacity = "1";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "wildlife" && (
            <div className="sharp-wildlife-section">
              {/* Row 1: Image, Content, Image */}
              <div className="sharp-wildlife-image-item">
                <img
                  src={wildlifeImages[0]}
                  alt="Bharal - Mountain Companions"
                  className="sharp-wildlife-image"
                  onError={(e) => {
                    console.error("Failed to load wildlife image");
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="sharp-wildlife-content-item">
                <h3 className="sharp-wildlife-title">
                  {wildlifeContent[0].title}
                </h3>
                <p className="sharp-wildlife-description">
                  {wildlifeContent[0].description}
                </p>
              </div>
              <div className="sharp-wildlife-image-item">
                <img
                  src={wildlifeImages[1]}
                  alt="Snow Leopard - Ghost of Mountains"
                  className="sharp-wildlife-image"
                  onError={(e) => {
                    console.error("Failed to load wildlife image");
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Row 2: Content, Image, Content */}
              <div className="sharp-wildlife-content-item">
                <h3 className="sharp-wildlife-title">
                  {wildlifeContent[1].title}
                </h3>
                <p className="sharp-wildlife-description">
                  {wildlifeContent[1].description}
                </p>
              </div>
              <div className="sharp-wildlife-image-item">
                <img
                  src={wildlifeImages[2]}
                  alt="Himalayan Fox - Desert Wanderer"
                  className="sharp-wildlife-image"
                  onError={(e) => {
                    console.error("Failed to load wildlife image");
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="sharp-wildlife-content-item">
                <h3 className="sharp-wildlife-title">
                  {wildlifeContent[2].title}
                </h3>
                <p className="sharp-wildlife-description">
                  {wildlifeContent[2].description}
                </p>
              </div>

              {/* Row 3: Image, Content, Image */}
              <div className="sharp-wildlife-image-item">
                <img
                  src={wildlifeImages[3]}
                  alt="Golden Eagle - Sky Sovereign"
                  className="sharp-wildlife-image"
                  onError={(e) => {
                    console.error("Failed to load wildlife image");
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="sharp-wildlife-content-item">
                <h3 className="sharp-wildlife-title">
                  {wildlifeContent[3].title}
                </h3>
                <p className="sharp-wildlife-description">
                  {wildlifeContent[3].description}
                </p>
              </div>
              <div className="sharp-wildlife-image-item">
                <img
                  src={wildlifeImages[4]}
                  alt="Mountain Goat - Cliff Dancer"
                  className="sharp-wildlife-image"
                  onError={(e) => {
                    console.error("Failed to load wildlife image");
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          )}

          {activeSection === "culture" && (
            <div className="sharp-culture-section">
              <div className="sharp-culture-header">
                <h2 className="sharp-culture-main-title">
                  Discover the Soul of Spiti Valley
                </h2>
                <p className="sharp-culture-intro">
                  Perched amid the stark beauty of the cold-desert Himalayas,
                  Kaza and Chicham are more than destinations—they're living
                  tapestries of resilient communities, age-old Buddhism, and
                  vibrant traditions. At our hotel, immerse yourself in this
                  rare heritage and tribal artistry, where rugged landscapes
                  meet timeless warmth.
                </p>
              </div>

              <div className="sharp-culture-grid">
                {cultureContent.map((item, index) => (
                  <div
                    key={index}
                    className={`sharp-culture-item ${
                      index % 2 === 1 ? "reverse" : ""
                    }`}
                  >
                    <div className="sharp-culture-text-container">
                      <h3 className="sharp-culture-item-title">{item.title}</h3>
                      <p className="sharp-culture-item-description">
                        {item.description}
                      </p>
                    </div>
                    <div className="sharp-culture-image-container">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="sharp-culture-image"
                        onError={(e) => {
                          console.error("Failed to load culture image");
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "landscapes" && (
            <div className="sharp-edge-gallery">
              {landscapeImages.map((image, index) => (
                <div key={index} className={getSharpItemClass(index)}>
                  <div className="sharp-image-container">
                    <img
                      src={image}
                      alt={`Breathtaking landscape ${index + 1}`}
                      className="sharp-gallery-image"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image}`);
                        e.target.style.display = "none";
                        e.target.parentElement.style.display = "none";
                      }}
                      onLoad={(e) => {
                        e.target.style.opacity = "1";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
