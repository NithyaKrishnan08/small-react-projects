import { useState } from "react";
import "../styles/togglebackground.css";

const ToggleBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [color, setColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setColor(color === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  return (
    <section style={{ backgroundColor, color }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color,
          border: `2px solid ${color}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
};

export default ToggleBackground;