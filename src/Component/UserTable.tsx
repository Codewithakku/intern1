import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 border-b border-gray-300 pb-3 mb-6 text-center">
        Users Table
      </h2>

      <DataTable
        value={users}
        selection={selectedUsers}
        onSelectionChange={(e) => setSelectedUsers(e.value)}  
        dataKey="id"  //unique field
        stripedRows   //rows backeground color
        rowHover    
        paginator
        rows={3}
        rowsPerPageOptions={[2, 5, 10, 20]} 
        className="p-datatable-sm"
        paginatorTemplate="RowsPerPageDropdown PageLinks" //enable pagination in numbers 
      
      >
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="email" header="Email" />
    
      </DataTable>


      {selectedUsers && selectedUsers.length > 0 && (
        <div className="mt-6 text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Selected Users:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {selectedUsers.map((user, index) => (
              <li key={index}>{user.name} ({user.email})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
