"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SelesByLocation from "../SelesByLocation/SelesByLocation";

const data = [
  { month: "Jan", orders: 35, earnings: 90, refunds: 8 },
  { month: "Feb", orders: 62, earnings: 100, refunds: 12 },
  { month: "Mar", orders: 48, earnings: 70, refunds: 7 },
  { month: "Apr", orders: 65, earnings: 110, refunds: 18 },
  { month: "May", orders: 52, earnings: 78, refunds: 20 },
  { month: "Jun", orders: 60, earnings: 85, refunds: 10 },
  { month: "Jul", orders: 43, earnings: 60, refunds: 5 },
  { month: "Aug", orders: 41, earnings: 30, refunds: 6 },
  { month: "Sep", orders: 75, earnings: 95, refunds: 9 },
  { month: "Oct", orders: 50, earnings: 40, refunds: 25 },
  { month: "Nov", orders: 63, earnings: 88, refunds: 14 },
];

export default function DashboardChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-4  p-4 border-2 border-red-400">
      {/* Left: Revenue Chart */}
      <div className="col-span-2 bg-white border-2 border-red-400  rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Revenue</h2>

        <div className="flex justify-between text-center mb-6">
          <div>
            <p className="text-xl font-bold">7,585</p>
            <span className="text-sm text-gray-500">Orders</span>
          </div>
          <div>
            <p className="text-xl font-bold">$22.89k</p>
            <span className="text-sm text-gray-500">Earnings</span>
          </div>
          <div>
            <p className="text-xl font-bold">367</p>
            <span className="text-sm text-gray-500">Refunds</span>
          </div>
          <div>
            <p className="text-xl font-bold text-green-600">18.92%</p>
            <span className="text-sm text-gray-500">Conversion Ratio</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#00C49F" radius={[8, 8, 0, 0]} />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#0E1D51"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="refunds"
              stroke="#FF6B6B"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <SelesByLocation />
    </div>
  );
}
