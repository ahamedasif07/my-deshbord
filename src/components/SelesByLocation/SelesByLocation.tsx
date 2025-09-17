"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default marker icons
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locations = [
  { name: "Canada", lat: 56.1304, lng: -106.3468, sales: 75, color: "blue" },
  { name: "Greenland", lat: 71.7069, lng: -42.6043, sales: 47, color: "green" },
  { name: "Russia", lat: 61.524, lng: 105.3188, sales: 82, color: "red" },
];

const SalesByLocationLeaflet = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Sales by Locations</h2>

      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((loc) => (
          <Marker key={loc.name} position={[loc.lat, loc.lng]}>
            <Popup>
              {loc.name} - {loc.sales}%
            </Popup>
          </Marker>
        ))}
      </MapContainer>

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
