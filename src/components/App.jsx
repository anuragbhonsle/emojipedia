import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(terms) {
  return (
    <Entry
      key={terms.id}
      emoji={terms.emoji}
      name={terms.name}
      description={terms.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
