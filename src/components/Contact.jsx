import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to landing page with contact hash
    navigate("/#contact", { replace: true });

    // Wait for navigation and DOM update, then scroll to contact section
    const timer = setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // If contact section not found immediately, try again after a short delay
        const retryTimer = setTimeout(() => {
          const retryContactSection = document.getElementById("contact");
          if (retryContactSection) {
            retryContactSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 500);

        return () => clearTimeout(retryTimer);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: '"Lato", sans-serif',
        color: "#5c4a35",
        background: "#f0ebe0",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          background: "#f7f3ec",
          borderRadius: "4px",
          boxShadow: "0 4px 20px rgba(45,31,20,0.08)",
          border: "1px solid #d4c8b8",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid #d4c8b8",
            borderTop: "4px solid #c4544a",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 1rem",
          }}
        ></div>
        <p>Redirecting to contact section...</p>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Contact;
