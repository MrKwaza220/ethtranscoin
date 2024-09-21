// src/components/CrossOperator.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CrossOperator({ setOperator }) {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    // Fetch the list of operators from the backend
    axios.get('/api/operators').then((response) => {
      setOperators(response.data);
    });
  }, []);

  return (
    <div>
      <label>Select Bus Operator:</label>
      <select onChange={(e) => setOperator(e.target.value)}>
        <option value="">--Select--</option>
        {operators.map((op) => (
          <option key={op.id} value={op.id}>
            {op.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CrossOperator;
