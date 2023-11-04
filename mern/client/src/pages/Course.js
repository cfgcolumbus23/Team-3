import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ClassCard from '../components/ClassCard'; // Import the ClassCard component
import 'bootstrap/dist/css/bootstrap.min.css';
import Calender from '../components/Calendar';

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Course = () => {
  const [selectedId, setSelectedId] = useState('');
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
      description: 'Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)',
      about: 'About the class content...',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    {
    id: 3,
      name: 'Information Technology',
      description: 'Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)',
      about: 'About the class content...',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    
  ];
  return (
    <div class= "course">
      <h1>Courses</h1>
      <div className="bg-purple-600 flex items-center justify-center h-screen">
        <div className="horizontal-row">
          {items.map((item) => {
             return <div>
              <ClassCard // Use the ClassCard component
                name={item.name}
                description={item.description}
              />
            </div>
            
})}

        </div>

      
      </div>
      <Calender />
    </div>
  );
};

export default Course;

