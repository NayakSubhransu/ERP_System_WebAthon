

// import React from 'react';
// import './Attendence.css';

// const Attendence = () => {
//   // Sample attendance data
//   const [attendanceData] = React.useState([
//     { subject: 'Mathematics', daysPresent: 28, totalDays: 30 },
//     { subject: 'Physics', daysPresent: 26, totalDays: 30 },
//     { subject: 'Chemistry', daysPresent: 27, totalDays: 30 },
//     { subject: 'Biology', daysPresent: 25, totalDays: 30 },
//     { subject: 'History', daysPresent: 29, totalDays: 30 },
//   ]);

//   return (
//     <div>
//       <h2>Attendance Tracking System</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Subjects</th>
//             <th>Number of Days Present</th>
//             <th>Percentage</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendanceData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.subject}</td>
//               <td>{item.daysPresent}/{item.totalDays}</td>
//               <td>{((item.daysPresent / item.totalDays) * 100).toFixed(2)}%</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Attendence ;



import React from 'react';
import './Attendence.css'; // Import the CSS file for styling

const Attendence = () => {
  // Sample attendance data
  const [attendanceData] = React.useState([
    { subject: 'Mathematics', daysPresent: 28, totalDays: 30 },
    { subject: 'Physics', daysPresent: 26, totalDays: 30 },
    { subject: 'Chemistry', daysPresent: 27, totalDays: 30 },
    { subject: 'Biology', daysPresent: 25, totalDays: 30 },
    { subject: 'History', daysPresent: 29, totalDays: 30 },
  ]);

  return (
    <div className="attendance-container">
      <h2 className="title">Attendance Tracking System</h2>
      <div className="table-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Subjects</th>
              <th>Number of Days Present</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item, index) => (
              <tr key={index}>
                <td className='subs'>{item.subject}</td>
                <td className='subs'>{item.daysPresent}/{item.totalDays}</td>
                <td className='subs'>{((item.daysPresent / item.totalDays) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendence;
