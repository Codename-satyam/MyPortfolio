/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import videoBg from "../../content/bg1.mp4";

import "./MainPage.css";

function App() {
  const [typedText, setTypedText] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const lines = [
    "Building the web, one pixel at a time",
    ".",
    "Ain't that cool but still manageable.",
    "I'll be glad to work with you.",
  ];

  const handleRedirect = () => {
    window.location.href = "https://drive.google.com/uc?export=download&id=18phFv_5jif4DaBpR32t4qC5ooktZakBZ";
  }

  useEffect(() => {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];

      if (charIndex < currentLine.length) {
        const typingEffect = setTimeout(() => {
          setTypedText((prev) => {
            const newLines = [...prev];
            newLines[lineIndex] = (newLines[lineIndex] || "") + currentLine[charIndex];
            return newLines;
          });
          setCharIndex((prev) => prev + 1);
        }, 50);

        return () => clearTimeout(typingEffect);
      } else if (lineIndex < lines.length - 1) {
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className="main-div">
      <video src={videoBg} autoPlay loop muted ></video>
      <div className="circle">
        <div className="pic"></div>
      </div>
      <div className="Written-content">
        <h1>Hey! I am Satyam</h1>
        {typedText.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <div className="buttn">
          <button onClick={handleRedirect}>Download CV<i class="fa-solid fa-arrow-down"></i></button>
        </div>
      </div>
    </div>
  );
}

export default App;
