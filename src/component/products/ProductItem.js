import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useProductContext } from '../store/ProductContextProvider';
import './ProductItem.css';

const ProductItem = ({ title, price, imageUrl }) => {
  const { addToCart } = useProductContext();

  const handleAddToCart = () => {
    addToCart({ title, price, imageUrl });
  };

  return (
    <Col sm={6} md={4} lg={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;