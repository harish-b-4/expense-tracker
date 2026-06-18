import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTransaction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function App() {

  const initialTotalTransaction = []

  const [totalTransactions, setTotalTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transaction");

    return savedTransactions ? JSON.parse(savedTransactions) : initialTotalTransaction;
  });

  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(totalTransactions));
  }, [totalTransactions])



  const expenseTransactions = totalTransactions.filter(
    item => item.type === "expense"
  );

  const categoryTotals = expenseTransactions.reduce((acc, item) => {
    if (acc[item.category]) {
      acc[item.category] += Number(item.amount);
    } else {
      acc[item.category] = Number(item.amount);
    }

    return acc;
  }, {});


  const chartData = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      category,
      amount,
    })
  );





  const income = totalTransactions
    .filter(item => item.type === "income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expense = totalTransactions
    .filter(item => item.type === "expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const balance = income - expense;


  const addNewTransactions = (transaction) => {
    transaction.id = Date.now();
    setTotalTransactions([...totalTransactions, transaction]);
  }

  const deleteTransactions = (id) => {
    setTotalTransactions(totalTransactions.filter((transaction) => transaction.id !== id));
  }


  const initialTransactions = { id: null, title: "", category: "", amount: "", type: "", date: "" }

  const [editTransactionData, setEditTransactionData] = useState(initialTransactions);

  const editTransactions = (editData) => {
    setEditTransactionData({ id: editData.id, title: editData.title, category: editData.category, amount: editData.amount, type: editData.type, date: editData.date })
  }

  const updateTransaction = (id, editedTransaction) => {
    setTotalTransactions(totalTransactions.map((transaction) => transaction.id === id ? editedTransaction : transaction));
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home income={income} expense={expense} balance={balance} totalTransactions={totalTransactions} deleteTransactions={deleteTransactions} editTransactions={editTransactions} chartData={chartData} />} />
          <Route path='/addtransaction' element={<AddTransaction addNewTransactions={addNewTransactions} />} />
          <Route path='/edittransaction' element={<EditTransaction editTransactionData={editTransactionData} updateTransaction={updateTransaction} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App