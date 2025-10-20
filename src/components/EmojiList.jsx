import React from "react";

export default function EmojiList({ emojis }) {
  return (
    <table className="emoji-table">
      <thead>
        <tr>
          <th>Emoji</th>
          <th>Name</th>
          <th>Meaning</th>
          <th>Unicode</th>
        </tr>
      </thead>
      <tbody>
        {emojis.map((emoji) => (
          <tr key={emoji.id}>
            <td className="emoji-cell">{emoji.emoji}</td>
            <td>{emoji.name}</td>
            <td>{emoji.meaning}</td>
            <td>{`U+${emoji.emoji
              .codePointAt(0)
              .toString(16)
              .toUpperCase()}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
