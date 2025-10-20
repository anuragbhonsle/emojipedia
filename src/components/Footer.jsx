import React from "react";
import { FaXTwitter } from "react-icons/fa6"; // install if not done: npm i react-icons

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Author: <span className="author-name">Anurag Bhonsle</span> |
        <a
          href="https://x.com/Anuraaaag7"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-link"
        >
          <FaXTwitter className="twitter-icon" /> @Anuraaaag7
        </a>
      </p>
    </footer>
  );
}
