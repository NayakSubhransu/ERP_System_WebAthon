import { useState } from "react";
import "./App.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import EquipmentApp from "./componenets/SACEquipment/EquipmentApp";
import AcadmicDetail from "./componenets/StudentProfile/AcadmicDetail";

import SidebarProfile from "./componenets/StudentProfile/SidebarProfile";
import HomeStudent from "./componenets/StudentProfile/HomeStudent";
import PersonalInfo from "./componenets/StudentProfile/PersonalInfo";

import AttendanceManager from "./componenetsAdmin/Attendence/AttendenceManager";
import EquipmentAdminApp from "./componenetsAdmin/Equipments/EquipmentAdminApp";
import ContactDetail from "./componenets/studentProfile/ContactDetails";

function App() {
  return (
    <div className="grid-container">
      <Header />
      {/* <SidebarProfile /> */}
      {/* <PersonalInfo /> */}
      {/* <AcadmicDetail /> */}
      {/* <ContactDetail /> */}

      <Sidebar />

      {/* <AttendanceManager  /> */}

      {/* <EquipmentApp /> */}

      {/* <EquipmentAdminApp /> */}
      <Home />
      {/* <HomeStudent /> */}
    </div>
  );
}

export default App;
