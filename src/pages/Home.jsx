import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExpenseChart from '../components/ExpenseChart';

function Home({
  income,
  expense,
  balance,
  totalTransactions,
  deleteTransactions,
  editTransactions,
  chartData,
}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 py-4 sm:py-6 md:py-8">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">
          Expense Tracker
        </h1>
        <p className="text-slate-500 mt-3 text-base sm:text-lg">
          Track your income, expenses, and savings effortlessly
        </p>
      </div>

      {/* Summary Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Income */}
          <div className="bg-linear-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-5 sm:p-6 shadow-lg hover:scale-105 transition-all duration-300">
            <p className="uppercase tracking-widest text-sm opacity-80">
              Total Income
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              ₹ {income}
            </h2>
          </div>

          {/* Expense */}
          <div className="bg-linear-to-r from-red-500 to-rose-600 text-white rounded-3xl p-5 sm:p-6 shadow-lg hover:scale-105 transition-all duration-300">
            <p className="uppercase tracking-widest text-sm opacity-80">
              Total Expenses
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              ₹ {expense}
            </h2>
          </div>

          {/* Balance */}
          <div className="bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-3xl p-5 sm:p-6 shadow-lg hover:scale-105 transition-all duration-300 sm:col-span-2 md:col-span-1">
            <p className="uppercase tracking-widest text-sm opacity-80">
              Current Balance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              ₹ {balance}
            </h2>
          </div>
        </div>
      </div>

      {/* Add Transaction Button */}
      <div className="flex justify-center my-6 sm:my-8 md:my-10 px-4">
        <button
          onClick={() => navigate('/addtransaction')}
          className="bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto"
        >
          + Add Transaction
        </button>
      </div>

      {/* Chart Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6">
          <ExpenseChart chartData={chartData} />
        </div>
      </div>

      {/* Transactions Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8 md:mt-10">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Recent Transactions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-center text-slate-700 text-sm sm:text-base">
                    ID
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-center text-slate-700 text-sm sm:text-base">
                    Title
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-center text-slate-700 text-sm sm:text-base">
                    Category
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-center text-slate-700 text-sm sm:text-base">
                    Amount
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-center text-slate-700 text-sm sm:text-base">
                    Type
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-center text-slate-700 text-sm sm:text-base">
                    Date
                  </th>
                  <th className="py-3 sm:py-4 px-3 sm:px-4 text-center text-slate-700 text-sm sm:text-base">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {totalTransactions.length > 0 ? (
                  totalTransactions.map((transaction, index) => (
                    <tr
                      key={transaction.id}
                      className="hover:bg-slate-50 transition-all duration-200"
                    >
                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-center border-b border-slate-100 text-sm sm:text-base">
                        {index + 1}
                      </td>

                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-center border-b border-slate-100 font-medium text-sm sm:text-base">
                        {transaction.title}
                      </td>

                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-center border-b border-slate-100 text-sm sm:text-base">
                        {transaction.category}
                      </td>

                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-center border-b border-slate-100 font-semibold text-sm sm:text-base">
                        ₹ {transaction.amount}
                      </td>

                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-center border-b border-slate-100">
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${transaction.type === 'income'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                            }`}
                        >
                          {transaction.type}
                        </span>
                      </td>

                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-center border-b border-slate-100 text-sm sm:text-base">
                        {transaction.date}
                      </td>

                      <td className="py-3 sm:py-4 px-3 sm:px-4 text-center border-b border-slate-100">
                        <div className="flex justify-center gap-2 sm:gap-3">
                          <button
                            onClick={() => {
                              navigate('/edittransaction');
                              editTransactions(transaction);
                            }}
                            className="bg-indigo-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-indigo-600 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              deleteTransactions(transaction.id)
                            }
                            className="bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-red-600 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center py-8 sm:py-10 text-slate-500 text-sm sm:text-base"
                    >
                      No Transactions Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;