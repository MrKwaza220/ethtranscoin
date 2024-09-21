// src/pages/OperatorDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OperatorDashboard() {
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    // Fetch revenue data from the backend
    axios.get('/api/operator/revenue').then((response) => {
      setRevenueData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Operator Dashboard</h1>
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
