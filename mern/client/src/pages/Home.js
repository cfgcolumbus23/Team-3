import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
//import "./Header.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
//import Button from '@mui/material/Button';

//Images
import resource from "../image/Job-Training.jpg"
import mentorship from "../image/mentorship.jpg"
import connection from "../image/connection.jpeg"

export default function Home() {
  return (
    <div className="home">
      <CardGroup className="Resources">
        <Card>
          <CardBody>
            <CardTitle tag="h5" >
              Find Your Resources
            </CardTitle>
            <CardText>
              We believe that everyone has the right to access the tools they need to succeed. Whether you're searching for career development workshops, educational materials, financial literacy guidance, or practical support like transportation and clothing for interviews, we've got you covered. 
            </CardText>
            <Button color="primary"> Resources  </Button>
          </CardBody>
        </Card>
        <Card className="my-2">
          <img src={resource} width={250} height={250} />
        </Card>

      </CardGroup>

      <CardGroup className="Education">
        <Card>
          <CardBody>
            <CardTitle tag="h5" >
              Find Your Education
            </CardTitle>
            <CardText>
            Education is the cornerstone upon which we build our futures, and we are committed to making it accessible to all. With a wide array of courses, workshops, and training sessions led by expert educators, you can gain the knowledge and qualifications necessary to excel in today's competitive landscape.
            </CardText>
            <Link to="/Courses">
              <Button color="primary" > Courses  </Button>
            </Link> 
          </CardBody>
        </Card>
        <Card>
          <img src={mentorship} width={275} />
        </Card>
      </CardGroup>

      <CardGroup className="Mentorship">
        <Card>
          <CardBody>
            <CardTitle tag="h5" >
              Find Your Mentorship
            </CardTitle>
            <CardText>
              Mentorship can light the way to personal and professional growth. Our mentorship program is rooted in the spirit of community and collaboration, offering one-on-one guidance, support, and encouragement. Whether you're taking your first steps into a new career, looking to level up in your current field, or seeking advice on how to navigate the challenges of the workforce, our mentors are here to guide you.
            </CardText>
            <Link to="/Mentorship">
              <Button color="primary" > Mentorship  </Button>
            </Link>
          </CardBody>
        </Card>
        <Card>
          <img src={mentorship} width={275} />
        </Card>
      </CardGroup>

      <CardGroup className="Connection">
        <Card>
          <CardBody>
            <CardTitle tag="h5" >
              Find Your Connection
            </CardTitle>
            <CardText>
            Goodwill is more than an organization; it's a vibrant community where individuals from all walks of life come together to support each other. Here, you can connect with peers, potential employers, and community leaders who share your commitment to growth and success. 
            </CardText>
            <Button color="primary"> Connection  </Button>
          </CardBody>
        </Card>
        <Card>
          <img src={connection} width={275}/>
        </Card>
      </CardGroup>
      

       

    </div>
  );
}
