import React from 'react';
import { SACProvider } from './SACContext';

import EquipmentList from './EquipmentList';
import EquipmentIssueForm from './EquipmentIssueForm';
import EquipmentReturnForm from './EquipmentReturnForm';

function App() {
  return (
    <SACProvider>
      <div className="App">
        <EquipmentList />
        <EquipmentIssueForm />
        <EquipmentReturnForm /> 
      </div>
    </SACProvider>
  );
}

export default App;

