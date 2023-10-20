import React, { useState } from 'react';
import { sampleData } from './data';
import CalendarFilter from './CalenderFilter';
import NameFilter from './NameFilter';
import AmountFilter from './AmountFilter';

function App() {
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleFilterChange = (filters) => {
   
    let filteredByDate = sampleData;
    if (filters.date) {
      filteredByDate = sampleData.filter((item) => item.date === filters.date);
    }

    
    let filteredByName = filteredByDate;
    if (filters.name) {
      filteredByName = filteredByDate.filter((item) =>
        item.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    
    let filteredByAmount = filteredByName;
    if (filters.minAmount) {
      filteredByAmount = filteredByName.filter(
        (item) => item.amount >= parseFloat(filters.minAmount)
      );
    }
    if (filters.maxAmount) {
      filteredByAmount = filteredByName.filter(
        (item) => item.amount <= parseFloat(filters.maxAmount)
      );
    }

    setFilteredData(filteredByAmount); 
  };

  return (
    <div>
      <h1>Data Filter App</h1>
      <CalendarFilter onFilterChange={handleFilterChange} />
      <NameFilter onFilterChange={handleFilterChange} />
      <AmountFilter onFilterChange={handleFilterChange} />
      
      {filteredData.map((item, index) => (
        <div key={index}>
          Date: {item.date}, Name: {item.name}, Amount: {item.amount}
        </div>
      ))}
    </div>
  );
}

export default App;
