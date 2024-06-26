import React, { useState, useEffect } from "react";
import "./Mentorship.css";

function ProfileCard() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('/api/mentors/getMentors');
        if (response.ok) {
          const data = await response.json();
          setMentors(data);
        } else {
          console.error('Failed to fetch mentors');
        }
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors(); // Fetch mentors when the component mounts
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <br></br>
      <p>Find Your Mentor!</p>
      <p>Search here:<br></br> <input type = "text"></input></p>
    <div className="Profiles">
      
      {mentors && mentors.map((mentor) => (
        <div className="profile-card" key={mentor._id}>
          <div className="upper-container">
            <div className="image-container">
              <img src={mentor.imageURL} alt="profile picture" height="100px" width="100px" />
            </div>
          </div>
          <div className="lower-container">
            <h3>{mentor.name}</h3>
            <h4>{mentor.role}</h4>
            <p>{mentor.bio}</p>
            <button>Learn More</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProfileCard;
