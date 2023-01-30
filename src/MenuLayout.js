import React, { useState } from "react";
import "./MenuLayout.css";

const MenuLayout = () => {
   return (
    <div>
        <div className="button-bar-header">
            <h2 className="menu-header-text">Main Menu</h2>
        </div>
        <div className="button-bar">
            <button className="button">Projects</button>
            <button className="button">Education</button>
            <button className="button">Resume</button>
            <button className="button">LinkedIn</button>
            <button className="button">About Me</button>
            <button className="button">Source Code</button>
        </div>
    </div>
   );
};

export default MenuLayout;
