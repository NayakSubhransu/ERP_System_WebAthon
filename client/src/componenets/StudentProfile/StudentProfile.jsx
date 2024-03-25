import React from "react";
// import { Route, NavLink, useRouteMatch } from "react-router-dom";
import Header from "../Header";

import { BrowserRouter as Router, Route} from "react-router-dom";
import "./Student.css";

import AcademicRecords from "./AcademicRecords";
import ContactDetails from "./ContactDetails";
import PersonalInfo from "./PersonalInfo";
import SidebarProfile from "./SidebarProfile";
// import Header from "../Header";
import HomeStudent from "./HomeStudent";

const StudentProfile = () => {
  // let { path, url } = useRouteMatch();

  return (
    <div>    
      <Header />  
      <HomeStudent />
      <SidebarProfile />
    </div>
  );
};

export default StudentProfile;
