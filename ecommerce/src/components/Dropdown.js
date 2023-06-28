import React, { useState } from 'react';

const Dropdown = ({ setSortBy }) => {
  const [selectedOption, setSelectedOption] = useState('Rating (High ➞ Low)');

  const handleSelectChange = (event) => {
    setSortBy(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className='dropdown-container'
      style={{ paddingTop: '2.5rem', paddingLeft: '2.5rem' }}
    >
      <h5 className='mb-3' style={{ letterSpacing: '0.1rem' }}>
        Sort By
      </h5>
      <select
        className='form-select'
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value='Rating (High ➞ Low)'>Rating (High ➞ Low)</option>
        <option value='Rating (Low ➞ High)'>Rating (Low ➞ High)</option>
        <option value='Price (High ➞ Low)'>Price (High ➞ Low)</option>
        <option value='Price (Low ➞ High)'>Price (Low ➞ High)</option>
      </select>
    </div>
  );
};

export default Dropdown;
