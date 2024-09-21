import React, { useState } from 'react';
import CrossOperator from '../../components/crossoperator/CrossOperator'; // Corrected the import path
import WalletIntegration from '../../components/walletintegration/WalletIntegration';

function TicketPurchase() {
  const [operator, setOperator] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const handlePurchase = () => {
    // Logic to handle ticket purchase
    console.log(`Purchasing ${ticketCount} tickets for operator: ${operator}`);
  };

  return (
    <div>
      <h2>Purchase Ticket</h2>
      <CrossOperator setOperator={setOperator} />
      <div>
        <label>Number of Tickets:</label>
        <input
          type="number"
          value={ticketCount}
          onChange={(e) => setTicketCount(e.target.value)}
          min="1"
        />
      </div>
      <WalletIntegration onPurchase={handlePurchase} />
    </div>
  );
}

export default TicketPurchase;
