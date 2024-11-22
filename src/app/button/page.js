"use client";
import React, { useState } from "react";

function GrowButton() {
  const [size, setSize] = useState(16);
  const [color, setColor] = useState("#000");

  const handleClick = () => {
    setSize(size * 2);
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleClick}
        style={{ fontSize: `${size}px`, backgroundColor: color }}
        className="px-4 py-2 rounded text-white"
      >
        GROW
      </button>
    </div>
  );
}

export default GrowButton;
