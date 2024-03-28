import React from 'react';

function TransactionItem({ transaction, deleteTransaction }) {
  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <tr>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.date}</td>
      <td>{transaction.category}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TransactionItem;
