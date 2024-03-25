import React from "react";
import "./Student.css";
import { MdArrowBack } from "react-icons/md";


function SidebarProfile() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        {/* <button onClick={() => history.goBack()} aria-label="Go back">
         */}
        <div className="arrow"><MdArrowBack /></div>
        <div className="sidebar-brand">STUDENT PROFILE</div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">Personal Information</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Academics</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Contact Details</a>
        </li>
        
      </ul>
    </aside>
  );
}

export default SidebarProfile;
