import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div
      className='price-slider-container'
      style={{ paddingTop: '2.5rem', paddingLeft: '2.5rem' }}
    >
      <Form>
        <Form.Range
          value={priceRange}
          onChange={(e) => handlePriceChange(e.target.value)}
          min={0}
          max={1000}
        />
        <div className='d-flex justify-content-between mt-2'>
          <span>0</span>
          <span>
            <strong>{priceRange}</strong>
          </span>
          <span>1000</span>
        </div>
      </Form>
    </div>
  );
};

export default PriceSlider;
