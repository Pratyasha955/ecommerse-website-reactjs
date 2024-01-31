import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import "./ProductItem.css";

const ProductItem = ({ title, price, imageUrl }) => (
  <Col sm={6} md={4} lg={3} className="mb-4">
    <Card>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  </Col>
);

export default ProductItem;