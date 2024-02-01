import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ title, price, imageUrl, onAddToCart }) => (
  <Col sm={6} md={4} lg={3} className="mb-4">
    <Card>
    <Link to={`/store/${title}`}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  </Col>
);

export default ProductItem;
