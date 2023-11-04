import ClassCard from '../components/ClassCard'; // Import the ClassCard component
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCalender from '../components/Calendar';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import { Card, CardGroup } from 'reactstrap';

const Course = () => {
  const items = [
    {
      id: 1,
      name: 'Basic Work Readiness',
      description: 'Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)',
      about: 'About the class content...',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    {
    id: 2,
      name: 'Digital Literacy',
      description: 'Class Format',
      about: 'About the class content...',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    {
    id: 3,
      name: 'Information Technology',
      description: 'Career Pathway Industry Recognized Credentials/ First Job',
      about: 'About the class content...',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    
  ];
  return (
    <div class= "course">
      <h1>Courses</h1>
      <p>From 1-on-1 career coaching to job credentials to digital literacy, our free job training programs are open to all.
These services are offered to the public at no-cost at various Goodwill Columbus job training centers and are focused on preparing individuals for in-demand jobs in the information technology, healthcare, hospitality, and logistics industries.</p>
     <CardGroup>
     < ClassCard name="Basic Work Readiness" />
     < ClassCard name="'Digital Literacy" description="Class Format" about="About the class content..." requirements= "Requirements for the class..." schedule= "Class schedule information..."/>
     </CardGroup>

          {items.map((item) => {
              return <div className = "horizontal-row">
                 <CardGroup>
                    <ClassCard // shows a preview of class card content 
                name={item.name}
                description={item.description}
              />
              </CardGroup> 
             </div> 
            
})}

      <CourseCalender />
    </div>
  );
};

export default Course;

