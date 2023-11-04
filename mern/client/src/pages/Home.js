import React from "react";
//import "./Header.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import resource from "../image/Job-Training.jpg"

function SimpleContainer() {
  return (
    <div>
      {/* Ayushe Type Here! Put your "I am" here*/}
      <h1>I am</h1>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="false">
          <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }}>
              <Box sx={{display: 'flex'}}>
                  Find Your Resources
              </Box>
              <Box sx={{display: 'flex'}}>
                  We believe that everyone has the right to access the tools they need to succeed. Whether you're searching for career development workshops, educational materials, financial literacy guidance, or practical support like transportation and clothing for interviews, we've got you covered. 
              </Box>
              <Box sx={{display: 'flex'}}>
                  <Button variant="contained">Resources</Button>
              </Box>
              <Box sx={{display: 'flex'}}>
                  <img src={resource} width={250} height={250} />
              </Box>


              
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}


export default function Home() {
  return (
    <div className="home">
        {SimpleContainer()}
        {/* <h1>Find Your Resources</h1>
        <h2>Get access to our newsletter</h2>
        <h1>Find Your Education</h1>

        <h1>Find Your Mentorship</h1>

        <h1>Find Your Connection</h1> */}

    </div>
  );
}
