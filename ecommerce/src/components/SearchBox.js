import React from 'react';

const SearchBox = ({ setSearchTerm }) => {
  const handleChange = (ev) => {
    setSearchTerm(ev.target.value);
  };

  return (
    <div
      className='input-group'
      style={{ paddingTop: '2.5rem', paddingLeft: '2.5rem' }}
    >
      <input
        type='search'
        className='form-control custom-placeholder'
        onChange={handleChange}
        placeholder='Search for products'
      />
    </div>
  );
};

export default SearchBox;
