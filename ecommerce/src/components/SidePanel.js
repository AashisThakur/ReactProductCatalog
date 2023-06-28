import React, { useState } from 'react';
import CategoryList from './CategoryList';
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';
import PriceSlider from './PriceSlider';

const SidePanel = ({
  categories,
  activeCategory,
  setActiveCategory,
  paginate,
  setSortBy,
  setSearchTerm,
}) => {
  return (
    <>
      <SearchBox setSearchTerm={setSearchTerm} />
      <CategoryList
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        paginate={paginate}
      />
      <Dropdown setSortBy={setSortBy} />
      <PriceSlider />
    </>
  );
};

export default SidePanel;
