import { useState, useEffect } from 'react';
import CourseStudentStyle from "./CourseStudent.module.css";
const DUMMY_COURSES = [
    { id: 1, name: 'Introduction to Computer Science', credit: 4, contactHours: 60, studentsEnrolled: 120 },
    { id: 2, name: 'Data Structures and Algorithms', credit: 3, contactHours: 45, studentsEnrolled: 95 },
    { id: 3, name: 'Web Development', credit: 3, contactHours: 45, studentsEnrolled: 110 },
    { id: 4, name: 'Database Systems', credit: 3, contactHours: 45, studentsEnrolled: 100 },
    // Add more courses as needed
];

function CoursesTable() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Simulating fetching data from an API
        setCourses(DUMMY_COURSES);
    }, []);

    return (
        <div className={CourseStudentStyle.courseID}>
            <h2>Course Details</h2>
            <table className={CourseStudentStyle.table}>
                <thead>
                    <tr className={CourseStudentStyle.tr}>
                        <th className={CourseStudentStyle.th}>Course</th>
                        <th className={CourseStudentStyle.th}>Credit</th>
                        <th className={CourseStudentStyle.th}>Contact Hours</th>
                        <th className={CourseStudentStyle.th}>Students Enrolled</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr className={CourseStudentStyle.tr} key={course.id}>
                            <td className={CourseStudentStyle.td}>{course.name}</td>
                            <td className={CourseStudentStyle.td}>{course.credit}</td>
                            <td className={CourseStudentStyle.td}>{course.contactHours}</td>
                            <td className={CourseStudentStyle.td}>{course.studentsEnrolled}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CoursesTable;
