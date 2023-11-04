import React, { useState } from "react";
import Header from '../components/Header.js'
import Footer from '../components/footer.js'

import "./Mentorship.css";

function ProfileCard() {
	
    const [name, setName] = useState('John Smith');
    const [job, setJob] = useState('Software Engineer');
    const [about, setAbout] = useState('As a previous employee, I was trained and equipped with the skills to be a software engineer now');
    
    return (
        //<Header />
    
        <div className="Profiles">
        <h2>Find your mentor!<br></br></h2>
        <p>Search here:<br></br></p>
            <div className='profile-card'>
                <div className='upper-container'>
                    <div className='image-container'>
                        <img src= " " alt= 'profile picture' height = "100px" width="100px" />
                    </div>
                </div>
            <div className="lower-container">
                <h3> { name } </h3>
                <h4> { job }</h4>
                <p> {about} </p>
                <button> Learn More </button>
                </div>
            </div>
        <div className='profile-card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src= " " alt= 'profile picture' height = "100px" width="100px" />
                </div>
            </div>
        <div className="lower-container">
            <h3> { name } </h3>
            <h4> { job }</h4>
            <p> {about} </p>
            <button> Learn More </button>
            </div>
        </div>
        <div className='profile-card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src= " " alt= 'profile picture' height = "100px" width="100px" />
                </div>
            </div>
        <div className="lower-container">
            <h3> { name } </h3>
            <h4> { job }</h4>
            <p> {about} </p>
            <button> Learn More </button>
            </div>
        </div>
    </div>
    //<Footer />
    ); 
}

export default ProfileCard;