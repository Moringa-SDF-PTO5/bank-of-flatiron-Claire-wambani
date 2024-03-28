import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import { fetchTransactions, addTransaction, deleteTransaction } from './services/Api';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchInitialTransactions();
  }, []);

  const fetchInitialTransactions = async () => {
    try {
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleAddTransaction = async (newTransaction) => {
    try {
      const data = await addTransaction(newTransaction);
      setTransactions([...transactions, data]);
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleDeleteTransaction = async (transactionId) => {
    try {
      await deleteTransaction(transactionId);
      setTransactions(transactions.filter(transaction => transaction.id !== transactionId));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>

      <input className='search'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <AddTransactionForm addTransaction={handleAddTransaction} />
      
      <TransactionList transactions={filteredTransactions} deleteTransaction={handleDeleteTransaction} />
    </div>
  );
}

export default App;
