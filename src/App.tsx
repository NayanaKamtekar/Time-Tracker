import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchUsers, User } from './API';
import UsersDropdown from './components/UserDropdown';

const App = () => {
  const [Users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      const newUsers = await fetchUsers();
      setUsers(newUsers);
    }
    getUsers();
  }, []);

  const getSelectedUser = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log(e.target.value);
    setSelectedUser(e.target.value);
  }

  return (
    <div className="App">
      <UsersDropdown users={Users} callback={getSelectedUser}/>
    </div>
  );
}

export default App;
