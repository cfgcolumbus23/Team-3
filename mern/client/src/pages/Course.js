
import ClassCard from '../components/ClassCard'; // Import the ClassCard component
import './Course.css';
function Course() {
  return (
    <div>
      <h1>Courses</h1>
      <div class = "courses">
      <ClassCard  name = "Basic Work Readiness" description = "Industry Recognized Credentials Microsoft Office Suite (Word, Excel, etc.)" />
      <ClassCard  />
      <ClassCard />
    </div>
    </div>
  );
}

export default Course;
