"use client";
import React, { useState } from "react";

function SimpleCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleReset = () => {
    setNum1(0);
    setNum2(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4 text-black">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          className="border rounded px-2 py-1 mr-2"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="mb-4 text-xl">Sum: {num1 + num2}</div>
      <button
        onClick={handleReset}
        className="px-3 py-1 bg-gray-500 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default SimpleCalculator;
