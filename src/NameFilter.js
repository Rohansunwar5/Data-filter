
import React, { useState } from 'react';

function NameFilter({ onFilterChange }) {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    
    onFilterChange({ name: newName });
  };

  return (
    <div>
      <h2>Name Filter</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default NameFilter;
