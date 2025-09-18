"use client";

import React from "react";

// Fix default marker icons

const locations = [
  { name: "Canada", lat: 56.1304, lng: -106.3468, sales: 75, color: "blue" },
  { name: "Greenland", lat: 71.7069, lng: -42.6043, sales: 47, color: "green" },
  { name: "Russia", lat: 61.524, lng: 105.3188, sales: 82, color: "red" },
];

const SalesByLocationLeaflet = () => {
  return (
    <div className="bg-white w-full  p-4 rounded-2xl  shadow-md">
      <h2 className="text-lg font-semibold mb-4">Sales by Locations</h2>

      {/* Sales Bars below the map */}
      <div className="mt-4 space-y-4">
        {locations.map((loc) => (
          <div key={loc.name}>
            <p className="flex justify-between text-sm">
              <span>{loc.name}</span> <span>{loc.sales}%</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full`}
                style={{ width: `${loc.sales}%`, backgroundColor: loc.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesByLocationLeaflet;
