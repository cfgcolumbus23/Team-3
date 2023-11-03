
// import ClassCard from '../components/ClassCard'; // Import the ClassCard component
// // import './Course.css';
// // function Course() {
// //   return (
// //     <div>
// //       <h1>Courses</h1>
// //       <div class = "courses">
// //       <ClassCard  name = "Basic Work Readiness" description = "Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)" />
// //       <ClassCard  />
// //       <ClassCard />
// //     </div>
// //     </div>
// //   );
// // }

// // export default Course;
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// const Course = () => {
//   const [selectedId, setSelectedId] = useState('');
//   const items = [
//         <ClassCard name = "Basic Work Readiness" description = "Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)" />,
//         <ClassCard name = "Basic Work Readiness" description = "Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)" />,
//         <ClassCard name = "Basic Work Readiness" description = "Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)" />
//   ];

//   return (
//     <div>
//     <h1>Courses</h1>
//     <motion.div className="bg-purple-600 flex items-center justify-center h-screen">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {items.map((item) => (
//           <motion.div
//             className={`card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
//               selectedId === item.ClassCard ? 'card-selected' : ''
//             }`}
//             layoutId={`card-container-${item.id}`}
//             onClick={() => setSelectedId(item.id)}
//             key={item.id}
//             initial={{ scale: 1 }}
//             animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
//             transition={{ duration: 0.3 }}
//           >
//             <div className="card-content">
//               <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.ClassCard.Course}</motion.h2>
//               <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <AnimatePresence>
//         {selectedId && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {items.map((item) => (
//               item.id === selectedId && (
//                 <motion.div
//                   className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
//                   layoutId={`card-container-${item.id}`}
//                   key={item.id}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.8, opacity: 0 }}
//                 >
//                   <motion.div className="relative">
//                     <motion.button
//                       className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
//                       onClick={() => setSelectedId('')}
//                     >
//                       Close
//                     </motion.button>
//                     <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
//                     <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
//                     <motion.p className="text-md text-gray-700 mb-4">{item.description}</motion.p>
//                     <motion.p
//                       className="text-md text-gray-700"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     >
//                       Additional content can go here!
//                     </motion.p>
//                   </motion.div>
//                 </motion.div>
//               )
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//     </div>
//   );
// };

// export default Course;
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import ClassCard from '../components/ClassCard'; // Import the ClassCard component
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './ClassCard.css';

// const Course = () => {
//   const [selectedId, setSelectedId] = useState('');
//   const items = [
//     {
//       id: 1,
//       name: 'Basic Work Readiness',
//       description: 'Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)',
//       about: 'About the class content...',
//       requirements: 'Requirements for the class...',
//       schedule: 'Class schedule information...',
//     },
//     {
//         id: 2,
//         name: 'Basic Work Readiness',
//         description: 'Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)',
//         about: 'About the class content...',
//         requirements: 'Requirements for the class...',
//         schedule: 'Class schedule information...',
//       },
//     // Add more items as needed
//   ];

//   return (
//     <div>
//       <h1>Courses</h1>
//       <motion.div className="bg-purple-600 flex items-center justify-center h-screen">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {items.map((item) => (
//             <motion.div
//               className={`card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-400 hover:scale-105 ${
//                 selectedId === item.id ? 'card-selected' : ''
//               }`}
//               layoutId={`card-container-${item.id}`}
//               onClick={() => setSelectedId(item.id)}
//               key={item.id}
//               initial={{ scale: 1 }}
//               animate={{ scale: selectedId === item.id ? 1.1 : 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <ClassCard // Use the ClassCard component
//                 name={item.name}
//                 description={item.description}
//                 about={item.about}
//                 requirements={item.requirements}
//                 schedule={item.schedule}
//               />
//             </motion.div>
//           ))}
//         </div>

//         <AnimatePresence>
//           {selectedId && (
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               {items.map((item) => (
//                 item.id === selectedId && (
//                   <motion.div
//                     className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
//                     layoutId={`card-container-${item.id}`}
//                     key={item.id}
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0.8, opacity: 0 }}
//                   >
//                     <motion.div className="relative">
//                       <motion.button
//                         className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
//                         onClick={() => setSelectedId('')}
//                       >
//                         Close
//                       </motion.button>
//                       <ClassCard // Use the ClassCard component
//                         name={item.name}
//                         description={item.description}
//                         about={item.about}
//                         requirements={item.requirements}
//                         schedule={item.schedule}
//                       />
//                     </motion.div>
//                   </motion.div>
//                 )
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// };

// export default Course;

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ClassCard from '../components/ClassCard'; // Import the ClassCard component
import 'bootstrap/dist/css/bootstrap.min.css';
// import './ClassCard.css';

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
        description: 'Career Pathway Industry Recognized Credentials/ First Job \n Career Pathway Industry Recognized Credentials/ Next Best Job',
        about: 'About the class content...',
        requirements: 'Requirements for the class...',
        schedule: 'Class schedule information...',
      },
  ];

  return (
    <div>
      <h1>Courses</h1>
      <motion.div className="bg-purple-600 flex items-center justify-center h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <motion.div
              className={`card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
                selectedId === item.id ? 'card-selected' : ''
              }`}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              initial={{ scale: 1 }}
              animate={{ scale: selectedId === item.id ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <ClassCard // Use the ClassCard component
                name={item.name}
                description={item.description}
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
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, y: 0, x: 0, transition: { center: 'center' } }} // Animate to the center
                    exit={{ scale: 0.8, opacity: 0, y: '100vh', x: '100vw', transition: { center: 'center' } }} // Animate off-screen
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
    </div>
  );
};

export default Course;
