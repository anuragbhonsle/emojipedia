import React from "react";

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <h1>Iconica</h1>
      <input
        type="text"
        placeholder="Search emojis..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </header>
  );
}
