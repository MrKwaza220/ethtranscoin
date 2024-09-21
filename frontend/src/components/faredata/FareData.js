// src/components/FareData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FareData() {
  const [fareData, setFareData] = useState([]);

  useEffect(() => {
    // Fetch fare data from the backend
    axios.get('/api/fare-data').then((response) => {
      setFareData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Real-Time Fare Data</h2>
      <ul>
        {fareData.map((fare) => (
          <li key={fare.id}>
            Route: {fare.route}, Fare: {fare.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FareData;
