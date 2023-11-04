import React, { useState, useEffect } from "react";
import "./Mentorship.css";

function ProfileCard() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch('/api/mentors/getAllRatings/getMentors');
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
    <div className="Profiles">
      <h2>Find your mentor!<br></br></h2>
      <p>Search here:<br></br></p>
      {mentors.map((mentor) => (
        <div className="profile-card" key={mentor._id}>
          <div className="upper-container">
            <div className="image-container">
              <img src={mentor.profilePictureUrl} alt="profile picture" height="100px" width="100px" />
            </div>
          </div>
          <div className="lower-container">
            <h3>{mentor.name}</h3>
            <h4>{mentor.job}</h4>
            <p>{mentor.about}</p>
            <button>Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;
