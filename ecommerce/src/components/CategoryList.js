import React from 'react';

const CategoryList = ({
  categories,
  activeCategory,
  setActiveCategory,
  paginate,
}) => {
  return (
    <div style={{ paddingTop: '2.5rem', paddingLeft: '2.5rem' }}>
      <h5 className='mb-3' style={{ letterSpacing: '0.1rem' }}>
        Category
      </h5>
      <div className='btn-container'>
        {categories.map((category) => {
          return (
            <button
              key={category}
              className='mb-2 d-block bg-transparent border-0 letter-spacing'
              style={{
                color: category === activeCategory ? '#0a0c0f' : '#617d98',
              }}
              onClick={() => {
                setActiveCategory(category);
                paginate(1); // WHEN CHNAGE CATEGORY SET CURRENT PAGE TO 1
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
