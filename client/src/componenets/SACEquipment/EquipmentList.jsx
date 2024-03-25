import React, { useContext } from "react";
import { SACContext } from "./SACContext";
import "./CommonStyles.css";

const EquipmentList = () => {
  const { equipment, isLoading } = useContext(SACContext);

  if (isLoading) return <p>Loading equipment...</p>;

  return (
    <div className="main" >
      <div className="title-main">Equipment List</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Quantity</th>
            <th>Available Quantity</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((eq) => (
            <tr key={eq.id}>
              <td>{eq.name}</td>
              <td>{eq.totalQuantity}</td>
              <td>{eq.availableQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;
