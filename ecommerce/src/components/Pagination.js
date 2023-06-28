import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  const handlePaginationClick = (pageNumber) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    paginate(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];

    for (let i = 1; i <= pageNumbers; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePaginationClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <div className='d-flex justify-content-center p-5'>
      <Pagination size='lg'>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePaginationClick(currentPage - 1)}
        />
        {renderPaginationItems()}
        <Pagination.Next
          disabled={currentPage === pageNumbers}
          onClick={() => handlePaginationClick(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
