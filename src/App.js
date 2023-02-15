import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryForm";
import EntriesChartTracker from "./Components/EntriesChartTracker/EntriesChartTracker";

function App() {
  const [entries, setEntries] = useState([
    { weight: 175, date: "11-23-2021" },
    { weight: 176, date: "11-24-2021" },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry]; // prevents nesting an array of current entries object, adds as individual objects
    setEntries(tempEntries); // coming from form
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryParent={addNewEntry} />
      <EntriesChartTracker parentEntries={entries} />
    </div>
  );
}

export default App;
