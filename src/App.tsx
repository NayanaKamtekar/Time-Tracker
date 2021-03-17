import React, { useState, useEffect } from "react";
// import './App.css';
import { fetchUsers, User } from "./API";
import Tracker, { TrackedItem } from "./components/Tracker";
import TrackedList from "./components/TrackedList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  const [Users, setUsers] = useState<User[]>([]);
  const [trackedItems, setTrackedItems] = useState<TrackedItem[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const newUsers = await fetchUsers();
      setUsers(newUsers);
    };
    getUsers();
    setTrackedItems(JSON.parse(localStorage.getItem("trackeditems") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("trackeditems", JSON.stringify(trackedItems));
  }, [trackedItems]);

  const handleTrackedItems = (item: TrackedItem): void => {
    setTrackedItems([...trackedItems, item]);
  };

  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Route
          path="/tracker"
          render={(props) => (
            <Tracker
              {...props}
              users={Users}
              handleTrackedItems={handleTrackedItems}
            />
          )}
        />
        <Route
          path="/trackedlist"
          render={(props) => (
            <TrackedList {...props} trackedItems={trackedItems} />
          )}
        />
      </div>
    </Router>
  );
};

export default App;