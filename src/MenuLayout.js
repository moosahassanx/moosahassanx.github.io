import React, { useState } from "react";
import "./MenuLayout.css";

const MenuLayout = () => {
  const [buttons, setButtons] = useState([
    { text: "Projects" },
    { text: "Education" },
    { text: "Resume" },
    { text: "LinkedIn" },
    { text: "About Me" },
    { text: "Source Code" }
  ]);
  const [startIndex, setStartIndex] = useState(0);
  const displayedButtons = buttons.slice(startIndex, startIndex + 3);
  const [slide, setSlide] = useState(false);

  const handleRightArrow = () => {
    if (startIndex + 3 < buttons.length) {
      setSlide(true);
      setTimeout(() => {
        setStartIndex(startIndex + 1);
        setSlide(false);
      }, 200);
    }
  };

  const handleLeftArrow = () => {
    if (startIndex > 0) {
      setSlide(true);
      setTimeout(() => {
        setStartIndex(startIndex - 1);
        setSlide(false);
      }, 200);
    }
  };

  function testFunc(idx) {
    console.log("startIndex: " + startIndex);
    console.log("idx: " + idx);
    if (idx === 0) {
      handleLeftArrow();
    } else if (idx === 2) {
      handleRightArrow();
    } else {
      console.log("yo");
    }
  }

  return (
    <div>
      <div className="button-bar-header">
        <h2 className="menu-header-text">Main Menu</h2>
      </div>
      <div className="button-bar">
        {startIndex !== 0 ? (
          <button className="button left-arrow" onClick={handleLeftArrow}>
            {"<"}
          </button>
        ) : null}
        {displayedButtons.map((btn, idx) => (
          <button
            className={`button ${slide ? "slide" : ""}`}
            key={idx}
            onClick={() => testFunc(idx)}
          >
            {btn.text}
          </button>
        ))}
        {startIndex !== 3 ? (
          <button className="button right-arrow" onClick={handleRightArrow}>
            {">"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MenuLayout;
