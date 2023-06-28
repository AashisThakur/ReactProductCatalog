import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img
        src={product.image}
        style={{
          minHeight: '15rem',
          maxHeight: '15rem',
          width: '100%',
          objectFit: 'contain',
        }}
      />

      <Card.Body>
        <Card.Title as='h5' className='mt-2 letter-spacing'>
          {product.name.toUpperCase()}
        </Card.Title>

        <Card.Text as='div' className='fs-5'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' className='mt-2 letter-spacing'>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
