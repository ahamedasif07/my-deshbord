"use client";
import { FC } from "react";
import { motion } from "framer-motion";

import { DollarSign, Plus, ShoppingBag, Users, Wallet } from "lucide-react";
import Link from "next/link";
import DashboardChart from "@/components/DeshbordChart/DeshBordChat";

import ProductListed from "@/components/ProductListed/ProductListed";
import { useAppContext } from "@/components/ContexProvider/ContexProvider";

export const statsData = [
  {
    title: "Total Earnings",
    value: "$559.25k",
    percentage: "+16.24%",
    isPositive: true,
    linkText: "View net earnings",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Orders",
    value: "36,894",
    percentage: "-3.57%",
    isPositive: false,
    linkText: "View all orders",
    icon: <ShoppingBag className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Customers",
    value: "183.35M",
    percentage: "+29.08%",
    isPositive: true,
    linkText: "See details",
    icon: <Users className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "My Balance",
    value: "$165.89k",
    percentage: "+0.00%",
    isPositive: true,
    linkText: "Withdraw money",
    icon: <Wallet className="w-6 h-6 text-gray-600" />,
  },
];

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

// best selling product
// data/products.ts
export interface Product {
  id: number;
  name: string;
  date: string;
  price: number;
  orders: number;
  stock: number;
  amount: number;
  status: "in-stock" | "out-of-stock";
}

export const products: Product[] = [
  {
    id: 1,
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: 29.0,
    orders: 62,
    stock: 510,
    amount: 1798,
    status: "in-stock",
  },
  {
    id: 2,
    name: "Bentwood Chair",
    date: "19 Mar 2021",
    price: 85.2,
    orders: 35,
    stock: 0,
    amount: 2982,
    status: "out-of-stock",
  },
  {
    id: 3,
    name: "Borosil Paper Cup",
    date: "01 Mar 2021",
    price: 14.0,
    orders: 80,
    stock: 749,
    amount: 1120,
    status: "in-stock",
  },
  {
    id: 4,
    name: "One Seater Sofa",
    date: "11 Feb 2021",
    price: 127.5,
    orders: 56,
    stock: 0,
    amount: 7140,
    status: "out-of-stock",
  },
  {
    id: 5,
    name: "Stillbird Helmet",
    date: "17 Jan 2021",
    price: 54,
    orders: 74,
    stock: 805,
    amount: 3996,
    status: "in-stock",
  },
];
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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home: FC = () => {
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
            <motion.div key={card.title} variants={cardVariants}>
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
