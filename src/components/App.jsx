import React, { useState } from "react";
import Header from "./Header";
import EmojiList from "./EmojiList";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Filter emojis by name, meaning, OR actual emoji character
  const filteredEmojis = emojipedia.filter(
    (emoji) =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.emoji.includes(searchTerm)
  );

  return (
    <div id="root">
      <div className="app-container">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="main-content">
          <EmojiList emojis={filteredEmojis} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
