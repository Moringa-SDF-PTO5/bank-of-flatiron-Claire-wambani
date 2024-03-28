import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
