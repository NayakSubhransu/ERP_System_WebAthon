import React, { useState, useContext } from "react";
import { SACContext } from "./SACContext";
import "./CommonStyles.css";

const EquipmentReturnForm = () => {
  const { returnEquipment } = useContext(SACContext);
  const [recordId, setRecordId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    returnEquipmentFromStudent(recordId);
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="title-main">Return Equipment</div>
        <input
          type="text"
          placeholder="Record ID"
          value={recordId}
          onChange={(e) => setRecordId(e.target.value)}
          required
        />
        <button type="submit">Return </button>
      </form>
    </div>
  );
};

export default EquipmentReturnForm;
