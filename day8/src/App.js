import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const Click = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString()); // Calculate the result
      } catch {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay(""); // Clear the display
    } else {
      setDisplay(display + value); // Append input
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
          <button key={item} onClick={() => Click(item)}>
            {item}
          </button>
        ))}
        <button className="clear" onClick={() => Click("C")}>
          C
        </button>
      </div>
    </div>
  );
};

export default App;


