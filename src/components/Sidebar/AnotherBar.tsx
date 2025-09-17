"use client";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";

const menuData = [
  {
    title: "Lorem Ipsum",
    items: ["TK-421", "why aren't", "you at", "your post?"],
  },
  {
    title: "Dolor Sit",
    items: ["Dark", "Wings", "Dark", "Words", "John SNUUW"],
  },
  {
    title: "Consectetur",
    items: ["Lorem", "Ipsum", "Dolor"],
  },
];

const ANotherbar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-64">
      <nav className="fixed top-0 left-0 h-full bg-gray-900 w-72">
        <ul className="mt-16 text-white font-semibold uppercase text-sm">
          {menuData.map((menu, index) => (
            <li
              key={menu.title}
              className="relative group"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <div className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-800 relative">
                <FaCircle className="mr-4 text-gray-400" />
                {menu.title}
              </div>

              {/* Submenu */}
              <ul
                className={`absolute top-0 left-full h-full bg-gray-800 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "w-72" : "w-0"
                }`}
              >
                {menu.items.map((sub) => (
                  <li
                    key={sub}
                    className="px-6 py-4 hover:bg-gray-700 text-white whitespace-nowrap"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ANotherbar;
