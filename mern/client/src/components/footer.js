import React, { useEffect, useState } from 'react';
import smile from '../smile.svg';
import neutral from '../neutral.svg';
import frown from '../frown.svg';




const Footer = () => {
  const [metrics, setMetrics] = useState([]);
  useEffect(() => {
    async function getMetrics() {
      const response = await fetch('http://localhost:3001/record/')
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const metrics = await response.json();
      console.log(metrics);
      setMetrics(metrics);
    }
    getMetrics();
    return;
  }, [metrics.length]);
  return (
    <footer>
      <img src={smile} alt = "smile" onClick={() =>
        console.log(metrics)
      }/>
      <img src={neutral} alt = "neutral"  />
      <img src={frown} alt = "frown" />
      
    </footer>
  );
};

export default Footer;