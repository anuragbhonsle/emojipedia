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
    <div>
      {/* 🧠 Pass search state and updater to Header */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 🎨 Show only matching emojis */}
      <EmojiList emojis={filteredEmojis} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
