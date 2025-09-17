"use client"; // <-- important for framer-motion

import { FC } from "react";
import { motion } from "framer-motion";

type StatCardProps = {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  linkText: string;
  icon: JSX.Element;
};

const StatCard: FC<StatCardProps> = ({
  title,
  value,
  percentage,
  isPositive,
  linkText,
  icon,
}) => {
  return (
    <motion.div
      className="bg-white shadow rounded-lg p-6 flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Card content */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span
          className={`text-sm font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {percentage}
        </span>
        <span className="text-sm text-blue-600 hover:underline">
          {linkText}
        </span>
      </div>
    </motion.div>
  );
};

export default StatCard;
