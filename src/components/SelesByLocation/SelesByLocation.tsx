import React from "react";

const SelesByLocation = () => {
  return (
    <div>
      {/* Right: Sales by Location */}
      <div className="bg-white p-5 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Sales by Locations</h2>
        <div className="space-y-4">
          <div>
            <p className="flex justify-between text-sm">
              <span>Canada</span> <span>75%</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "75%" }}
              />
            </div>
          </div>
          <div>
            <p className="flex justify-between text-sm">
              <span>Greenland</span> <span>47%</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "47%" }}
              />
            </div>
          </div>
          <div>
            <p className="flex justify-between text-sm">
              <span>Russia</span> <span>82%</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "82%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelesByLocation;
