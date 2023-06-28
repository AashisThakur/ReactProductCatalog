import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import SidePanel from '../components/SidePanel';
import products from '../data/Products';
import Pagination from '../components/Pagination';
import { fuzzyLookup } from '../utils/search';

const ProductPage = () => {
  const [data, setData] = useState(products);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Rating (High ➞ Low)');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Apply filters and sorting
  useEffect(() => {
    let filteredData = products;

    // Apply category filter
    if (activeCategory !== 'All') {
      filteredData = filteredData.filter(
        (product) => product.category === activeCategory
      );
    }

    // Apply search filter
    if (searchTerm !== '') {
      filteredData = fuzzyLookup(searchTerm, filteredData, (t) => t.name);
    }

    // Apply sorting
    switch (sortBy) {
      case 'Rating (High ➞ Low)':
        filteredData = filteredData.sort((a, b) => b.rating - a.rating);
        break;
      case 'Rating (Low ➞ High)':
        filteredData = filteredData.sort((a, b) => a.rating - b.rating);
        break;
      case 'Price (High ➞ Low)':
        filteredData = filteredData.sort((a, b) => b.price - a.price);
        break;
      case 'Price (Low ➞ High)':
        filteredData = filteredData.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setData(filteredData);
    setCurrentPage(1); // Reset to first page
  }, [activeCategory, sortBy, searchTerm]);

  // Pagination
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Row>
      <Col xs={12} md={2}>
        <SidePanel
          categories={[
            'All',
            ...new Set(products.map((product) => product.category)),
          ]}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          paginate={paginate}
          setSortBy={setSortBy}
          setSearchTerm={setSearchTerm}
        />
      </Col>
      <Col xs={12} md={10} className='p-4'>
        <Row>
          {currentItems.map((product) => (
            <Col key={product.name} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default ProductPage;
