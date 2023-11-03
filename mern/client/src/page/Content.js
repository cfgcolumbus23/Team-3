import React from "react";
//import "./Header.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }}>
            <Box sx={{display: 'flex'}}>
                Find Your Resources
            </Box>
            <Box sx={{display: 'flex'}}>
                We believe that everyone has the right to access the tools they need to succeed. 
            </Box>
            
            
        </Box>
      </Container>
    </React.Fragment>
  );
}


export default function Content() {
  return (
    <div className="content">
        {SimpleContainer()}
        {/* <h1>Find Your Resources</h1>
        <h2>Get access to our newsletter</h2>
        <h1>Find Your Education</h1>

        <h1>Find Your Mentorship</h1>

        <h1>Find Your Connection</h1> */}

    </div>
  );
}
