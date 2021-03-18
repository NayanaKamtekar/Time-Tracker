import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { fetchUsers, User } from "./API";
import Nav from "./components/Nav";
import Tracker, { TrackedItem } from "./components/Tracker";
import TrackedList from "./components/TrackedList";

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
      <div className="container-fluid w-75">
        <h3 className="mb-3 mt-2">Time Tracker</h3>
        <Nav />
        <Route path="/" exact render={() => <Redirect to="/tracker" />} />
        <Route
          path="/tracker"
          render={() => (
            <Tracker users={Users} handleTrackedItems={handleTrackedItems} />
          )}
        />
        <Route
          path="/trackedlist"
          render={() => <TrackedList trackedItems={trackedItems} />}
        />
      </div>
    </Router>
  );
};

export default App;
