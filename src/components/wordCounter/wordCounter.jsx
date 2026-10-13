import React from "react";
import './wordCounter.css';

const WordCounter = () => {
  const [text, setText] = React.useState("");
  const [wordCount, setWordCount] = React.useState(0);
  const [charCount, setCharCount] = React.useState(0);

  return (
    <div className='main-container'>
      <h1>Word Counter</h1>
      <textarea style={{ width: "300px", height: "150px" }}
        placeholder="Type something..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setWordCount(e.target.value.trim().split(" ").length);
          setCharCount(e.target.value.length);
        }}
      />
      <p><strong>Word Count:</strong> {wordCount}</p>
      <p><strong>Character Count:</strong> {charCount}</p>
    </div>
  );
};

export default WordCounter; 