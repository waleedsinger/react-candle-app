import React, { useState, useEffect } from "react";
import "./style.css"; // Ensure your CSS is included

const Candle = () => {
  const [candleHeight, setCandleHeight] = useState(90); // Initial height set to 90%

  useEffect(() => {
    const interval = setInterval(() => {
      setCandleHeight((prevHeight) => {
        if (prevHeight <= 10) {
          return 90; // Reset height to 90% if it reaches 10%
        } else {
          return prevHeight - 5; // Decrease height by 5% every 2 seconds
        }
      });
    }, 2000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="exercise">
      <div
        className="candleContainer"
        style={{ height: `${candleHeight}%` }} // Dynamically set height
      >
        <div className="candle">
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Candle />;
};

export default App;
