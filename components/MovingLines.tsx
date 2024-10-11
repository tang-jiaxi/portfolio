import React from "react";
import "./MovingLines.css";

const MovingLines = () => {
  const numLines = 15;

  // Function to generate an array of line properties (random Y position, width, and delay)
  const generateLines = () => {
    const linesArray = [];
    for (let i = 0; i < numLines; i++) {
      const randomY = Math.floor(Math.random() * 100); 
      const randomDelay = Math.random() * 20; 
      const randomWidth = Math.random() * 10 + 5;
      linesArray.push({ top: `${randomY}vh`, delay: `${randomDelay}s`, width: `${randomWidth}vw` });
    }
    return linesArray;
  };

  const lines = generateLines();

  return (
    <div className="lines-container">
      {lines.map((line, index) => (
        <div
          key={index}
          className="line"
          style={{
            top: line.top,
            animationDelay: line.delay,
            width: line.width,
          }}
        ></div>
      ))}
    </div>
  );
};

export default MovingLines;
