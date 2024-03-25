import React, { useState } from 'react';
import CourseStudentStyle from "./CourseStudent.module.css";

const CourseTable = () => {
  // Sample course data
  const courses = [
    { id: 1, name: 'Course 1', credit: 3, contactHours: 45 },
    { id: 2, name: 'Course 2', credit: 4, contactHours: 60 },
    { id: 3, name: 'Course 3', credit: 2, contactHours: 30 },
  ];

  // State to keep track of selected courses
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');

  // Function to handle checkbox change
  const handleCheckboxChange = (e, courseId) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // Add course to selectedCourses array
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      // Remove course from selectedCourses array
      setSelectedCourses(selectedCourses.filter(id => id !== courseId));
    }
  };

  // Function to handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Function to handle roll number input change
  const handleRollNoChange = (e) => {
    setRollNo(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Roll Number:", rollNo);
    console.log("Selected Courses:", selectedCourses);
  };

  // Calculate total credit and contact hours for selected courses
  const totalCredit = selectedCourses.reduce((total, courseId) => {
    const selectedCourse = courses.find(course => course.name === courseId);
    return total + selectedCourse.credit;
  }, 0);

  const totalContactHours = selectedCourses.reduce((total, courseId) => {
    const selectedCourse = courses.find(course => course.name === courseId);
    return total + selectedCourse.contactHours;
  }, 0);

  return (
    <div className={CourseStudentStyle.courseID}>
      <h2>Course Registration</h2>
      <label className={CourseStudentStyle.label}>Name:</label>
      <input required className={CourseStudentStyle.input} type="text" value={name} onChange={handleNameChange} />
      <label className={CourseStudentStyle.label}>Roll No:</label>
      <input required className={CourseStudentStyle.input} type="text" value={rollNo} onChange={handleRollNoChange} />
      <table className={CourseStudentStyle.table}>
        <thead>
          <tr className={CourseStudentStyle.tr}>
            <th className={CourseStudentStyle.th}>Course</th>
            <th className={CourseStudentStyle.th}>Credit</th>
            <th className={CourseStudentStyle.th}>Contact Hours</th>
            <th className={CourseStudentStyle.th}>Select</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id} className={CourseStudentStyle.tr}>
              <td className={CourseStudentStyle.td}>{course.name}</td>
              <td className={CourseStudentStyle.td}>{course.credit}</td>
              <td className={CourseStudentStyle.td}>{course.contactHours}</td>
              <td className={CourseStudentStyle.td}>
                <input className={CourseStudentStyle.input}
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, course.name)}
                  checked={selectedCourses.includes(course.name)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total Credit: {totalCredit}</p>
        <p>Total Contact Hours: {totalContactHours}</p>
      </div>
      <button type='submit' onClick={handleSubmit} className={CourseStudentStyle.button} disabled={(name==="" || rollNo==="")}>Submit</button>
      {(name==="" || rollNo==="") ? <p style={{color:"red"}}>Please enter a valid Name and Roll No.</p> : null}
    </div>
  );
};

export default CourseTable;
