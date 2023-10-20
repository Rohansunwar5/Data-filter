
import React, { useState } from 'react';

function AmountFilter({ onFilterChange }) {
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  const handleMinAmountChange = (e) => {
    const newMinAmount = e.target.value;
    setMinAmount(newMinAmount);
    
    onFilterChange({ minAmount: newMinAmount, maxAmount });
  };

  const handleMaxAmountChange = (e) => {
    const newMaxAmount = e.target.value;
    setMaxAmount(newMaxAmount);
    
    onFilterChange({ minAmount, maxAmount: newMaxAmount });
  };

  return (
    <div>
      <h2>Amount Filter</h2>
      <input
        type="number"
        placeholder="Min Amount"
        value={minAmount}
        onChange={handleMinAmountChange}
      />
      <input
        type="number"
        placeholder="Max Amount"
        value={maxAmount}
        onChange={handleMaxAmountChange}
      />
    </div>
  );
}

export default AmountFilter;
