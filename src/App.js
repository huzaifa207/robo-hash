import { useState, useEffect } from "react";

import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

import { robots } from "./robots";

import "./App.css";

function App() {
  const [filteredRobots, setFilteredRobots] = useState(robots);
  const [searchField, setSearchField] = useState("");

  let onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  let filtereRobots = () => {
    setFilteredRobots(
      robots.filter((robot) =>
        robot.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  };

  useEffect(() => {
    filtereRobots();
  }, [searchField]);

  return (
    <div className="App">
      <Navbar searchField={searchField} handleChange={onSearchChange} />
      <MainContent robots={filteredRobots} />
    </div>
  );
}

export default App;
