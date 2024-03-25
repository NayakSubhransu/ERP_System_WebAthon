import React, { createContext, useState, useEffect } from "react";
import axios from "axios"; // Make sure to install axios

export const SACContext = createContext();

export const SACProvider = ({ children }) => {
  
  const [equipment, setEquipment] = useState([
    { id: 'e1', name: 'Treadmill', totalQuantity: 10, availableQuantity: 5 },
    { id: 'e2', name: 'Stationary Bicycle', totalQuantity: 8, availableQuantity: 8 },
    { id: 'e3', name: 'Dumbbell Set', totalQuantity: 15, availableQuantity: 10 },
    { id: 'e4', name: 'Yoga Mats', totalQuantity: 20, availableQuantity: 15 },
    { id: 'e5', name: 'Kettlebells', totalQuantity: 12, availableQuantity: 9 },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchEquipment = async () => {
    try {
      const response = await axios.get("/api/equipment");
      setEquipment(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching equipment:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  const issueEquipment = async (equipmentId, studentId) => {
    try {
      // Call the API to issue equipment and update state accordingly
      const response = await axios.post("/api/equipment/issue", {
        equipmentId,
        studentId,
      });
      updateEquipmentList(response.data); // Assuming your endpoint sends back the updated list
    } catch (error) {
      console.error("Failed to issue equipment:", error);
      // Handle errors as needed
    }
  };

  const returnEquipment = async (recordId) => {
    try {
      // Call the API to return equipment and update state accordingly
      const response = await axios.post("/api/equipment/return", { recordId });
      updateEquipmentList(response.data); // Assuming your endpoint sends back the updated list
    } catch (error) {
      console.error("Failed to return equipment:", error);
      // Handle errors as needed
    }
  };

  const updateEquipmentList = (updatedEquipment) => {
    // Directly setting the equipment state with the updated list
    setEquipment(updatedEquipment);
  };

  return (
    <SACContext.Provider
      value={{
        equipment,
        fetchEquipment,
        issueEquipment,
        returnEquipment,
        updateEquipmentList,
        isLoading,
      }}
    >
      {children}
    </SACContext.Provider>
  );
};
