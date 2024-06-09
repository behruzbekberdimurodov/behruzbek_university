import React, { useState, useEffect } from 'react';

const LightModeToggle = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    // Local storage'dan light mode holatini oling
    const savedMode = localStorage.getItem('lightMode');
    if (savedMode) {
      setLightMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    // Light mode holatini local storage'ga saqlang
    localStorage.setItem('lightMode', JSON.stringify(lightMode));
    if (lightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [lightMode]);

  const toggleLightMode = () => {
    setLightMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleLightMode}>
      {lightMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default LightModeToggle;
