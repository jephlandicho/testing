"use client";
import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(2);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4 text-xl">Count: {count}</div>
      <div className="mb-4">{count % 2 === 0 ? "Even" : "Odd"}</div>
      <div className="space-x-2">
        <button
          onClick={() => setCount(count * 2)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count / 2)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(1)}
          className="px-3 py-1 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
