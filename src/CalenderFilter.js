
import React, { useState } from 'react';

function CalendarFilter({ onFilterChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
   
    onFilterChange({ date: selectedDate });
  };

  return (
    <div>
      <h2>Date Filter</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default CalendarFilter;
