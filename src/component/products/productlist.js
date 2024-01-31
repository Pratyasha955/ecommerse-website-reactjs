import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { useProductContext } from '../store/ProductContextProvider';
import './ProductList.css';

const ProductList = () => {
  const productsArr = useProductContext().productsArr;

  return (
    <Container className="mt-4">
      <Row>
        {productsArr.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;