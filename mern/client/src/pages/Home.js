import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
//import "./Header.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import Button from '@mui/material/Button';

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
              <div>
                <Box sx={{display: 'flex'}}>
                    Find Your Resources
                </Box>
              </div>
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
      <CardGroup>
        <Card className="Resources">
          <CardBody>
            <CardTitle tag="h5" >
              Find Your Resources
            </CardTitle>
            <CardText>
              We believe that everyone has the right to access the tools they need to succeed. Whether you're searching for career development workshops, educational materials, financial literacy guidance, or practical support like transportation and clothing for interviews, we've got you covered. 
            </CardText>
            <CardText>
              {/* <small className="text-muted">
                Resources
              </small> */}
            </CardText>
            <Button color="primary"> Resources  </Button>
          </CardBody>
          
        </Card>
        <Card className="my-2">
          <img src={resource} width={250} height={250} />
        </Card>

      </CardGroup>
      <CardGroup>
        <Card className="Mentorship">
          <CardBody>
            <CardTitle tag="h5" >
              Find Your Mentorship
            </CardTitle>
            <CardText>
              We believe that everyone has the right to access the tools they need to succeed. Whether you're searching for career development workshops, educational materials, financial literacy guidance, or practical support like transportation and clothing for interviews, we've got you covered. 
            </CardText>
            <CardText>
              {/* <small className="text-muted">
                Resources
              </small> */}
            </CardText>
            <Button color="primary"> Mentorship  </Button>
          </CardBody>
          
        </Card>
        <Card className="my-2">
          <img src={resource} width={250} height={250} />
        </Card>

      </CardGroup>
      

       

    </div>
  );
}
