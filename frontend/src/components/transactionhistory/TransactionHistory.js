// src/components/TransactionHistory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transaction history from the backend
    axios.get('/api/transactions').then((response) => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id}>
            {tx.date}: {tx.details}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
