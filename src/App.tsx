import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchUsers, User } from './API';
import Tracker, { TrackedItem } from './components/Tracker';


const App = () => {
  const [Users, setUsers] = useState<User[]>([]);
  const [trackedItems, setTrackedItems] = useState<TrackedItem[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const newUsers = await fetchUsers();
      setUsers(newUsers);
    }
    getUsers();
  }, []);

  const handleTrackedItems = (item: TrackedItem): void => {
    setTrackedItems([...trackedItems, item])
  }

  console.log(trackedItems);

  return (
    <div className="App">
      <Tracker users={Users} handleTrackedItems={handleTrackedItems}/>
    </div>
  );
}

export default App;
