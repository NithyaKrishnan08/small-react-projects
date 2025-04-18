import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/hiddensearchbar.css";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleContainerClick = (e) => {
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };

  const handleSearchClick = (e) => {
    e.stopPropagation();
    setShowInput(true);
    setBgColor("#1a1a1a");
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleContainerClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={handleSearchClick} />
      )}
    </section>
  );
};

export default HiddenSearchBar;