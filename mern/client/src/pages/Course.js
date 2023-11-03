import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ClassCard from '../components/ClassCard'; // Import the ClassCard component
import 'bootstrap/dist/css/bootstrap.min.css';
import Calender from '../components/Calendar';

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
      name: 'Basic Work Readiness',
      description: 'Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)',
      about: 'About the class content...',
      requirements: 'Requirements for the class...',
      schedule: 'Class schedule information...',
    },
    
    // Add more items as needed
  ];

  return (
    <div class= "course">
      <h1>Courses</h1>
      <motion.div className="bg-purple-600 flex items-center justify-center h-screen">
        <div className="horizontal-row">
          {items.map((item) => (
            <motion.div
              className={`horizontal-row ${
                selectedId === item.id ? 'card-selected' : ''
              }`}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              initial={{ scale: .1 }}
              animate={{ scale: selectedId === item.id ? .1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <ClassCard // Use the ClassCard component
                name={item.name}
                description={item.description}
                about={item.about}
                requirements={item.requirements}
                schedule={item.schedule}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {items.map((item) => (
                item.id === selectedId && (
                  <motion.div
                    className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0, y: -100, x: 0 }}
                    animate={{ scale: .1, opacity: 1, y: 0, x: 0, transition: { duration: 0.3 } }}
                    exit={{ scale: 0.8, opacity: 0, y: -100, x: 0, transition: { duration: 0.3 } }}
                  >
                    <motion.div className="relative">
                      <motion.button
                        className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                        onClick={() => setSelectedId('')}
                      >
                        Close
                      </motion.button>
                      <ClassCard // Use the ClassCard component
                        name={item.name}
                        description={item.description}
                        about={item.about}
                        requirements={item.requirements}
                        schedule={item.schedule}
                      />
                    </motion.div>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <Calender />
    </div>
  );
};

export default Course;
