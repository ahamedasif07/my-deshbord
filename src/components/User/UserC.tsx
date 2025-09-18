"use client";
import React, { useState } from "react";
import { useFetch } from "../ContexProvider/ContexProvider";
import UserCard from "../Card/UserCard";

const UserC = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const [selectedUser, setSelectedUser] = useState(null);

  const handleView = (user) => {
    setSelectedUser(user);
    // Future: open animated modal here
  };

  if (loading) return <p className="text-center mt-10">Loading users...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-600">Failed to load users</p>
    );

  return (
    <div className="max-w-6xl mx-auto mt-6 p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Users</h1>

      {/* Responsive table container */}
      <div className="overflow-x-auto w-full">
        <table className="w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1 text-xs sm:text-sm md:text-base text-left">
                Name
              </th>
              <th className="border px-2 py-1 text-xs sm:text-sm md:text-base text-left">
                Email
              </th>
              <th className="border px-2 py-1 text-xs sm:text-sm md:text-base text-left">
                Company
              </th>
              <th className="border px-2 py-1 text-xs sm:text-sm md:text-base text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UserCard key={user.id} user={user} onView={handleView} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional: selected user details */}
      {selectedUser && (
        <div className="mt-6 p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="font-bold text-xl mb-2">{selectedUser.name}</h2>
          <p className="text-sm sm:text-base">Email: {selectedUser.email}</p>
          <p className="text-sm sm:text-base">
            Company: {selectedUser.company.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserC;
