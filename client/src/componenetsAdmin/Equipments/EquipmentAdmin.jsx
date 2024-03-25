import React, { useState, useEffect, useContext } from 'react';
import './Equipment.css'; 
import axios from 'axios';  
import { SACContext } from '../../componenets/SACEquipment/SACContext';
// Make sure your styles are appropriately defined



const EquipmentAdmin = () => {  
  const { equipment, fetchEquipment, updateEquipmentList } = useContext(SACContext);
  const [newEquipment, setNewEquipment] = useState({ name: '', totalQuantity: 0 });
  const [editMode, setEditMode] = useState(false);
  const [currentEditingId, setCurrentEditingId] = useState(null);

  useEffect(() => {
    fetchEquipment();
  }, [fetchEquipment]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEquipment({ ...newEquipment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editMode ? `/api/equipment/${currentEditingId}` : '/api/equipment';
    const method = editMode ? axios.put : axios.post;

    try {
      const { data } = await method(url, newEquipment);
      setEquipment(data); // Assuming your API returns the updated equipment list
      setNewEquipment({ name: '', totalQuantity: 0 });
      setEditMode(false);
      setCurrentEditingId(null);
    } catch (error) {
      console.error("Failed to submit equipment data:", error);
    }
  };

  const handleEdit = (equipmentItem) => {
    setNewEquipment({ name: equipmentItem.name, totalQuantity: equipmentItem.totalQuantity });
    setEditMode(true);
    setCurrentEditingId(equipmentItem.id);
  };

  const handleDelete = async (equipmentId) => {
    if (window.confirm('Are you sure you want to delete this equipment?')) {
      try {
        const { data } = await axios.delete(`/api/equipment/${equipmentId}`);
        setEquipment(data); // Assuming your API returns the updated equipment list
      } catch (error) {
        console.error("Failed to delete equipment:", error);
      }
    }
  };


  return (
    <div className="equipment-admin">
      <div className="title-main">Manage Equipment</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Equipment Name"
          value={newEquipment.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="totalQuantity"
          placeholder="Total Quantity"
          value={newEquipment.totalQuantity}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editMode ? 'Update' : 'Add'}</button>
        {editMode && <button onClick={() => setEditMode(false)}>Cancel</button>}
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.totalQuantity}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentAdmin;
