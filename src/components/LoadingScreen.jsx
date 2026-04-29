import { useState, useEffect } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2400);
    const doneTimer = setTimeout(() => onComplete(), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className={`ls-screen ${fading ? "ls-fade-out" : ""}`}>
      <div className="ls-content">
        <div className="ls-spinner">
          <div className="ls-logo-ring">
            <img src="/images/logo.jpg" alt="House on the Clouds" className="ls-logo" />
          </div>
        </div>
        <h1 className="ls-title">House on the Clouds</h1>
        <p className="ls-location">SPITI VALLEY</p>
        <p className="ls-tagline">A place to pause, breathe and belong</p>
      </div>
    </div>
  );
}
