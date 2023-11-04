import React, { useState } from "react";
import Header from '../components/Header.js'
import Footer from '../components/footer.js'
import TextField from "@mui/material/TextField";
import "./Mentorship.css";

function ProfileCard() {
    // const [inputText, setInputText] = useState("");
    // let inputHandler = (e) => {
    // //convert input text to lower case
    // var lowerCase = e.target.value.toLowerCase();
    // setInputText(lowerCase);
	
    const [name, setName] = useState('John Smith');
    const [job, setJob] = useState('Software Engineer');
    const [about, setAbout] = useState('As a previous employee, I was trained and equipped with the skills to be a software engineer now');

    
    return (
        //<Header />
    
        <div className="Profiles">
        <h2>Find your mentor!<br></br></h2>
        <h3>Search here: </h3>
        <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <br></br>
            <div className='profile-card'>
                <div className='upper-container'>
                    <div className='image-container'>
                        <img src= "https://images.squarespace-cdn.com/content/v1/572e050c4d088ea3a8f0ac9d/1652567769003-BQFG03H3A1X8RTMGTPF5/Rachel_Daniel-1753-PRINT.jpg?format=1000w" alt= 'profile picture' height = "100px" width="100px" />
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