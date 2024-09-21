// src/components/CrossOperator.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CrossOperator({ setOperator }) {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    // Fetch the list of operators from the backend
    axios.get('http://localhost:3000/api/operators')
      .then((response) => {
        setOperators(response.data);
      })
      .catch((error) => {
        console.error('Error fetching operators:', error); // Log any error
      });
  }, []);
  
  return (
    <div>
      <label>Select Bus Operator:</label>
      <select onChange={(e) => setOperator(e.target.value)}>
        <option value="">--Select--</option>
        {operators.map((op) => (
          <option key={op._id} value={op._id}>
            {op.name} {/* This will now correctly display 'MyCiTi' or 'Golden Arrow' */}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CrossOperator;
