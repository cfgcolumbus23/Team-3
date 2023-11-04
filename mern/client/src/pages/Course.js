
import { useState } from 'react';
import Header from '../components/Header.js'
import ClassCard from '../components/ClassCard'; // Import the ClassCard component
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCalender from '../components/Calendar';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import { Card, CardGroup } from 'reactstrap';
import "./Course.css"
const Course = () => {
  const items = [
    {
      id: 1,
      name: 'Basic Work Readiness',
      description: 'Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)',
      about: 'Class Format: Remote or utilize Upskilling Lab with computer and wifi at Goodwill Columbus',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    {
    id: 2,
      name: 'Digital Literacy',
      description: 'Learn the basics of how to use technology!',
      about: 'Class Format: In person -- Monday thru Friday at Columbus Metropolitan Libraries',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    {
    id: 3,
      name: 'Information Technology',
      description: 'Career Pathway Industry Recognized Credentials/ First Job',
      about: 'Certifications in CompTIA A+ or Google IT Support Professional',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    {
    id: 4,
      name: 'Healthcare',
      description: 'Career Pathway Industry Recognized Credentials/ First Job',
      about: 'About the class content...',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    {
    id: 5,
    name: 'Hospitality, Lodging, & Retail',
    description: 'Career Pathway Industry Recognized Credentials/ First Job',
    about: 'About the class content...',
    requirements: 'Requirements for the class...',
    schedule: 'Class schedule information...',
  },
  {
    id: 6,
    name: 'Logistics (Roads2Work)',
    description: 'Career Pathway Industry Recognized Credentials/ First Job',
    about: 'About the class content...',
    requirements: 'Requirements for the class...',
    schedule: 'Class schedule information...',
  },
  ];
  return (
    <div class= "course">
      <Header />
      <h1>Courses</h1>
      <p>From 1-on-1 career coaching to job credentials to digital literacy, our free job training programs are open to all.
These services are offered to the public at no-cost at various Goodwill Columbus job training centers and are focused on preparing individuals for in-demand jobs in the information technology, healthcare, hospitality, and logistics industries.</p>

        <div className = "card-body">
          {items.map((item) => {
              return <td className = "horizontal-row"> <span>
                 <CardGroup > 
                    <ClassCard // shows a preview of class card content 
                name={item.name}
                description={item.description}
                about={item.about}
                requirements={items.requirements}
                schedule ={items.schedule}
              />
              </CardGroup> 
              </span>  
             </td> 
        })}
        </div>
        <tr>    
        </tr>
            

      <CourseCalender />
    </div>
  );
};

export default Course;

