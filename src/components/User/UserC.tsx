"use client";
import React, { useState } from "react";
import { useFetch } from "../ContexProvider/ContexProvider";
import UserCard from "../Card/UserCard";
import { motion, AnimatePresence } from "framer-motion";

const UserC = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const [selectedUser, setSelectedUser] = useState(null);

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleClose = () => {
    setSelectedUser(null);
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
      <div className="overflow-x-auto w-full ">
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

      {/* Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleClose} // Close when clicking overlay
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-lg p-6 w-11/12 max-w-4xl h-[60vh] shadow-2xl mt-20 overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <h2 className="text-2xl font-bold mb-4">{selectedUser.name}</h2>
              <p className="mb-2">
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p className="mb-2">
                <strong>Company:</strong> {selectedUser.company.name}
              </p>
              <p className="mb-2">
                <strong>Website:</strong> {selectedUser.website}
              </p>
              <p className="mb-2">
                <strong>Address:</strong> {selectedUser.address.street},{" "}
                {selectedUser.address.city}
              </p>

              <button
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={handleClose}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserC;
