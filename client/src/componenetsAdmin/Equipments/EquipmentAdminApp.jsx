
import React from 'react';

import EquipmentAdmin from './EquipmentAdmin';

import { SACProvider } from '../../componenets/SACEquipment/SACContext';



function App() {
  return (
    <SACProvider>
      <div className="App">
        <EquipmentAdmin />
      </div>
    </SACProvider>
  );
}

export default App;
