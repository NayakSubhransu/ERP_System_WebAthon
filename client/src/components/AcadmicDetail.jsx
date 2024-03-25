import React, { useState, useEffect } from 'react';
import AcadmicDetail from './AcadmicDetail.module.css';
const DummyData = [
    {
      semester: 1,
      subjects: [
        { subject: 'Math', credit: 3, grade: 'Ex' },
        { subject: 'Science', credit: 4, grade: 'B' },
        { subject: 'English', credit: 2, grade: 'C' },
        { subject: 'Physics', credit: 2, grade: 'A' },
        { subject: 'Chemistry', credit: 2, grade: 'Ex' },
        { subject: 'PDS', credit: 2, grade: 'Ex' },
      ],
    },
    // Add more semesters as needed
  ];
  

const GradeCalculator = () => {
  const [semesters, setSemesters] = useState(DummyData);
  const [finalCGPA, setFinalCGPA] = useState(null);

  useEffect(() => {
    calculateCGPA();
  }, [semesters]);

  const calculateCGPA = () => {
    let totalSGPA = 0;
    let totalCredits = 0;

    semesters.forEach((semester, index) => {
      let semesterSGPA = calculateSemesterSGPA(semester.subjects);
      totalSGPA += semesterSGPA * getTotalCredits(semester.subjects);
      totalCredits += getTotalCredits(semester.subjects);
      // Store SGPA for each semester in state
      const updatedSemesters = [...semesters];
      updatedSemesters[index].sgpa = semesterSGPA.toFixed(2);
      setSemesters(updatedSemesters);
    });

    const cgpa = totalSGPA / totalCredits;
    setFinalCGPA(cgpa.toFixed(2));
  };

  const calculateSemesterSGPA = (subjects) => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      totalGradePoints += getGradePoint(subject.grade) * subject.credit;
      totalCredits += subject.credit;
    });

    return totalGradePoints / totalCredits;
  };

  const getGradePoint = (grade) => {
    switch (grade) {
      case 'Ex':
        return 10.0;
      case 'A':
        return 9.0;
      case 'B':
        return 8.0;
      case 'C':
        return 7.0;
      case 'D':
        return 6.0;
      default:
        return 0.0;
    }
  };

  const getTotalCredits = (subjects) => {
    return subjects.reduce((total, subject) => total + subject.credit, 0);
  };

  return (
    <div className={AcadmicDetail.acadmeicDetail}>
      <h2>Academic Record</h2>
      {semesters.map((semester, index) => (
        <div key={index}>
          <h3>Semester {semester.semester}</h3>
          <table className={AcadmicDetail.table}>
            <thead>
              <tr className={AcadmicDetail.tr}>
                <th className={AcadmicDetail.th}>Subject</th>
                <th className={AcadmicDetail.th}>Credit</th>
                <th className={AcadmicDetail.th}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {semester.subjects.map((subject, idx) => (
                <tr className={AcadmicDetail.tr} key={idx}>
                  <td className={AcadmicDetail.td}>{subject.subject}</td>
                  <td className={AcadmicDetail.td}>{subject.credit}</td>
                  <td className={AcadmicDetail.td}>{subject.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>SGPA: {semester.sgpa}</p>
        </div>
      ))}
      <div>
        <p>Final CGPA: {finalCGPA}</p>
      </div>
    </div>
  );
};

export default GradeCalculator;
