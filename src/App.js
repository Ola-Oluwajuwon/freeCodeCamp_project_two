import React, { useState } from "react";
import Editor from "./Project components/Editor";
import Previewer from "./Project components/Previewer";
import "./App.css";

function App() {
  const [markdownText, setMarkdownText] = useState("");

  const handleTextChange = text => {
    setMarkdownText(text);
  };

  return (
    <div className="container">
      <Editor onChange={handleTextChange} />

      <Previewer markdownText={markdownText} />
    </div>
  );
}

export default App;
