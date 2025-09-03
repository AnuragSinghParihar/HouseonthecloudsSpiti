import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to landing page with contact hash to trigger scroll
    navigate('/#contact', { replace: true });
  }, [navigate]);

  return null; // No content to render
};

export default Contact;
