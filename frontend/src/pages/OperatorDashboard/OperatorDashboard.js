import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TicketPurchase from '../../components/ticketpurchase/TicketPurchase';

function OperatorDashboard() {
  const [revenueData, setRevenueData] = useState([]);
  const [isPurchasing, setIsPurchasing] = useState(false);

  useEffect(() => {
    // Fetch revenue data from the backend
    axios.get('/api/operator/revenue').then((response) => {
      setRevenueData(response.data);
    });
  }, []);

  const handlePurchaseToggle = () => {
    setIsPurchasing(!isPurchasing);
  };

  return (
    <div>
      <h1>Operator Dashboard</h1>
      <button onClick={handlePurchaseToggle}>
        {isPurchasing ? 'Hide Ticket Purchase' : 'Buy Ticket'}
      </button>
      
      {isPurchasing && <TicketPurchase />}

      <h2>Revenue Data</h2>
      <ul>
        {revenueData.map((data) => (
          <li key={data.id}>
            Date: {data.date}, Revenue: {data.revenue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OperatorDashboard;
