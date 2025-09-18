import { DollarSign, ShoppingBag, Users, Wallet } from "lucide-react";

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
