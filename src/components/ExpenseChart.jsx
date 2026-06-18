import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ExpenseChart({ chartData }) {
  const COLORS = [
    "#3B82F6", // Blue
    "#10B981", // Green
    "#F59E0B", // Yellow
    "#EF4444", // Red
    "#8B5CF6", // Purple
    "#06B6D4", // Cyan
    "#F97316", // Orange
  ];

  if (!chartData.length) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-10 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
          Expense Breakdown
        </h2>

        <p className="text-slate-500 text-sm sm:text-base">
          No expense data available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8">

      {/* Header */}
      <div className="mb-5 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Expense Breakdown
        </h2>

        <p className="text-slate-500 mt-1 text-sm sm:text-base">
          Category-wise expense distribution
        </p>
      </div>

      {/* Chart */}
      <div className="h-[280px] sm:h-[360px] md:h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius="55%"
              innerRadius="28%"
              paddingAngle={4}
              label
            >
              {chartData.map((item, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
              }}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Category Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">

        {chartData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-slate-50 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3"
          >
            <div className="flex items-center gap-2 sm:gap-3">

              <div
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0"
                style={{
                  backgroundColor:
                    COLORS[index % COLORS.length],
                }}
              />

              <span className="font-medium text-slate-700 text-sm sm:text-base">
                {item.category}
              </span>

            </div>

            <span className="font-semibold text-slate-900 text-sm sm:text-base">
              ₹ {item.amount}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ExpenseChart;