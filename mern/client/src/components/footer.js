import React, { useEffect, useState } from "react";
import smile from '../smile.svg';
import neutral from '../neutral.svg';
import frown from '../frown.svg';
import { useLocation } from 'react-router-dom';
import "./footer.css";


// className="App-footer"
const Footer = () => {
  const location = useLocation();
  const [ratings, setRatings] = useState(null);

  const handleClick = async (emotion) => {
    await fetch('api/ratings/updateRatings?' + 'page=' + location.pathname + '&emotion=' + emotion);
    fetchRatings(); // Refetch ratings data after each click
  };

  const fetchRatings = async () => {
    const pathOfPage = location.pathname;
    const response = await fetch('/api/ratings/getRatings?page=' + pathOfPage);
    const json = await response.json();

    if (response.ok) {
      setRatings(json);
    }
  };

  useEffect(() => {
    fetchRatings(); // Fetch ratings data initially
  }, [location]); // Empty dependency array to ensure it runs only once when component mounts

  return (
    <footer className="App-footer">
      <div className="emojiss">
      <div>
        <img id="footer" src={smile} alt="smile" onClick={() => handleClick('numSmile')} />
        {ratings && ratings.numSmile && <p>{ratings.numSmile}</p>}
      </div>
      <div>
        <img id="footer" src={neutral} alt="neutral" onClick={() => handleClick('numNeutral')} />
        {ratings && ratings.numNeutral && <p>{ratings.numNeutral}</p>}
      </div>
      <div>
        <img id="footer" src={frown} alt="frown" onClick={() => handleClick('numFrown')} />
        {ratings && ratings.numFrown && <p>{ratings.numFrown}</p>}
      </div>
      </div>
    </footer>
  );
};

export default Footer;
