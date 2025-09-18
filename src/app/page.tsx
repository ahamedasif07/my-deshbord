"use client";
import { FC } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import DashboardChart from "@/components/DeshbordChart/DeshBordChat";

import ProductListed from "@/components/ProductListed/ProductListed";
import { useAppContext } from "@/components/ContexProvider/ContexProvider";
import { products } from "@/components/product/Product";
import { statsData } from "@/components/statData/StatData";
import { Plus } from "lucide-react";
// best selling product
// data/products.ts

type StatCardProps = {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
  linkText: string;
  icon: React.ReactNode;
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
    <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
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
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

// Parent container variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each card animation
    },
  },
};

// Child card variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const Home = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useAppContext();
  return (
    <div className="">
      {/* basic information section */}
      <section className="bg-gray-50 p-4  ">
        <div className="flex items-center justify-between mb-6  ">
          {/* Left: Greeting */}
          <div>
            <h2 className="text-xl font-bold">Wellcome To Deshbord</h2>
          </div>

          {/* Right: Date + Add Product */}
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center gap-2">
              <span>Add Product</span>
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grid with stagger animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {statsData.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <StatCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* graph sectoion */}
      <section>
        <DashboardChart />
      </section>
      <section className="flex lg:flex-row flex-col gap-5 p-4 ">
        <ProductListed products={products} productType="Best Selling Product" />
        <ProductListed products={products} productType="Retrun product" />
      </section>
    </div>
  );
};

export default Home;
