"use client";
import React, { useEffect, useState } from "react";

function CardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 text-black">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-60 p-4 bg-white rounded-lg shadow-md flex flex-col items-center"
        >
          <img
            src={item.avatar}
            alt={item.first_name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">
            {item.first_name} {item.last_name}
          </h2>
          <p className="text-gray-600 text-center">{item.employment.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
