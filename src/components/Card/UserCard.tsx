"use client";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const UserCard = ({ user, onView }) => {
  return (
    <tr className="hover:bg-gray-50 cursor-pointer">
      <td className="border px-2 py-1 text-xs sm:text-sm md:text-base">
        {user.name}
      </td>
      <td className="border px-2 py-1 text-xs sm:text-sm md:text-base">
        {user.email}
      </td>
      <td className="border px-2 py-1 text-xs sm:text-sm md:text-base">
        {user.company.name}
      </td>
      <td className="border px-2 py-1 text-center">
        <button
          className="text-blue-600 hover:text-blue-800"
          onClick={() => onView(user)}
        >
          <AiOutlineEye size={18} />
        </button>
      </td>
    </tr>
  );
};

export default UserCard;
