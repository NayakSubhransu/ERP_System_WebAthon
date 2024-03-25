import React, { useState } from "react";
import Select from "react-select";
import "./Attendence.css";

const AttendanceManager = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [students, setStudents] = useState([
    // Placeholder data
    { id: 1, name: "John Doe", roll: "001", attendance: "" },
    { id: 2, name: "Jane Smith", roll: "002", attendance: "" },
    { id: 3, name: " Smith", roll: "003", attendance: "" },

    { id: 4, name: "Jane ", roll: "004", attendance: "" },

    // Add more student data here
  ]);

  // Options for the branch and subject dropdowns
  const branchOptions = [
    { value: "cs", label: "Computer Science" },
    { value: "me", label: "Mechanical Engineering" },
    { value: "EE", label: "Electrical Engineering" },
    { value: "CE", label: "Civil Engineering" },
    // ... other branches
  ];

  const subjectOptions = [
    { value: "math", label: "Mathematics" },
    { value: "phy", label: "Physics" },
    { value: "PDS", label: "PDS" },

    { value: "MTM", label: "MTM" },

    // ... other subjects
  ];

  // Define custom styles for react-select
  const dropdownStyles = {
    control: (base) => ({
      ...base,
      minHeight: '36px',
      height: '36px',
      borderRadius: '.6rem',
      borderWidth: '2px',
      borderColor: '#ced4da',
      boxShadow: '0 9px 6px rgba(0, 0, 0, 0.1)', // Box shadow added here
      '&:hover': {
        borderColor: '#adb5bd'
      }
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '2px 8px',
      lineHeight: '1.5',
    }),
    input: (base) => ({
      ...base,
      margin: '0px',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      marginTop: '0px',
      marginBottom: '0px',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: 'gray',
      '&:hover': {
        color: 'black',
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: 'gray',
      fontSize: '1em',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'black',
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#dee2e6' : 'white',
      '&:hover': {
        backgroundColor: '#000',
      },
    }),
  };
  

  // Handle change for the Select dropdowns
  const handleBranchChange = (selectedOption) => {
    setSelectedBranch(selectedOption);
  };

  const handleSubjectChange = (selectedOption) => {
    setSelectedSubject(selectedOption);
  };

  // Function to handle attendance radio button change
  const handleAttendanceChange = (studentId, attendanceValue) => {
    setStudents(
      students.map((student) => {
        if (student.id === studentId) {
          return { ...student, attendance: attendanceValue };
        }
        return student;
      })
    );
  };

  // Function to submit the attendance
  const handleSubmit = () => {
    console.log(students);
    // Submit logic here
  };

  return (
    <div className="main">
      <div className="title-main">
      CHOOSE THE BRANCH AND SUBJECT FOR ATTENDANCE
      </div>

      {/* 1st Section with Dropdowns */}
      <div className="dropdown-section">
        <Select
          value={selectedBranch}
          onChange={handleBranchChange}
          options={branchOptions}
          placeholder="Select Branch"
          styles={dropdownStyles} // Apply the styles here
        />
        <Select
          value={selectedSubject}
          onChange={handleSubjectChange}
          options={subjectOptions}
          placeholder="Select Subject"
          styles={dropdownStyles} // And here
        />
      </div>

      {/* 2nd Section with Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>
                <label>
                  <input
                    type="radio"
                    name={`attendance-${student.id}`}
                    checked={student.attendance === "present"}
                    onChange={() =>
                      handleAttendanceChange(student.id, "present")
                    }
                  />
                  Present
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="radio"
                    name={`attendance-${student.id}`}
                    checked={student.attendance === "absent"}
                    onChange={() =>
                      handleAttendanceChange(student.id, "absent")
                    }
                  />
                  Absent
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 3rd Section with Submit Button */}
      <div className="submit-section">
        <button onClick={handleSubmit}>Submit Attendance</button>
      </div>
    </div>
  );
};

export default AttendanceManager;
