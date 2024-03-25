import React from "react";
import "./App.css";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        Main Menu
        {/* <div className="sidebar-brand">Main Menu</div> */}
      </div>
      

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href=""x>Student Profile</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Course Registration</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Attendance Tracking</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Grading System</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Exam Related</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Feedback and Survey</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">SAC Equipment Issue</a>
        </li>
        
      </ul>
    </aside>
  );
}

export default Sidebar;
