import React, { useState, useContext } from "react";
import { SACContext } from "./SACContext";
import "./CommonStyles.css";

const EquipmentIssueForm = () => {
  const { issueEquipment } = useContext(SACContext);

  const [equipmentId, setEquipmentId] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    issueEquipment(equipmentId, studentId);
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="title-main">Issue Equipment</div>
        <input
          type="text"
          placeholder="Equipment ID"
          value={equipmentId}
          onChange={(e) => setEquipmentId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <button type="submit">Issue</button>
      </form>
    </div>
  );
};

export default EquipmentIssueForm;
