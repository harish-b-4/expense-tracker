import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditTransaction({ editTransactionData, updateTransaction }) {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState(editTransactionData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTransactions({ ...transactions, [name]: value, });
  };

  useEffect(() => {
    setTransactions(editTransactionData);
  }, [editTransactionData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!transactions.title || !transactions.category || !transactions.amount || !transactions.type || !transactions.date) return;

    updateTransaction(transactions.id, transactions);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Edit Transaction
          </h1>

          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Update your transaction details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium text-slate-700 text-sm sm:text-base">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={transactions.title}
              onChange={handleInputChange}
              placeholder="Enter transaction title"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium text-slate-700 text-sm sm:text-base">
              Category
            </label>

            <select
              name="category"
              value={transactions.category}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Salary">Salary</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Amount + Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            <div>
              <label className="block mb-2 font-medium text-slate-700 text-sm sm:text-base">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                value={transactions.amount}
                onChange={handleInputChange}
                placeholder="Enter amount"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700 text-sm sm:text-base">
                Date
              </label>

              <input
                type="date"
                name="date"
                value={transactions.date}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
              />
            </div>

          </div>

          {/* Transaction Type */}
          <div>
            <label className="block mb-3 font-medium text-slate-700 text-sm sm:text-base">
              Transaction Type
            </label>

            <div className="flex gap-4 sm:gap-6">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={transactions.type === 'expense'}
                  onChange={handleInputChange}
                  className="size-4"
                />

                <span className="text-red-600 font-medium text-sm sm:text-base">
                  Expense
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={transactions.type === 'income'}
                  onChange={handleInputChange}
                  className="size-4"
                />

                <span className="text-green-600 font-medium text-sm sm:text-base">
                  Income
                </span>
              </label>

            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">

            <button
              type="submit"
              className="flex-1 bg-amber-500 text-white py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:bg-amber-600 hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              Update Transaction
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 bg-slate-200 text-slate-700 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-slate-300 transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default EditTransaction;