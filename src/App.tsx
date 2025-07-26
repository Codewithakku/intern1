import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserTable from './Component/UserTable';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserTable />} />
    </Routes>
  );
};

export default App;
