import React, { useEffect, useState } from 'react';
import smile from '../smile.svg';
import neutral from '../neutral.svg';
import frown from '../frown.svg';
import { useLocation } from 'react-router-dom';




const Footer = () => {
  const location = useLocation()
  const [ratings, setRatings] = useState(null)
  useEffect(() => {
    const fetchRatings = async() => {
      const pathOfPage = location.pathname;
      console.log(pathOfPage)
      const response = await fetch('/api/ratings/getRatings?page=' + pathOfPage)
      const json = await response.json()

      if (response.ok){
        console.log("YAY")
        console.log(json)
        setRatings(json)
      }
    }
    fetchRatings()
  }, [])
  return (
    <footer>
      <div>
        <img src={smile} alt = "smile" onClick={() =>
        console.log("HI")
        }/>
        
        {ratings && ratings.numSmile && <p>{ratings.numSmile}</p>}

        
      </div>
      <div>
        <img src={neutral} alt = "neutral"  />
        {ratings && ratings.numNeutral && <p>{ratings.numNeutral}</p>}

      </div>
      <div>
        <img src={frown} alt = "frown" />
        {ratings && ratings.numFrown && <p>{ratings.numFrown}</p>}

      </div>
      
    </footer>
  );
};

export default Footer;