import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './productlist.css';

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
];

const ProductList = () => {
    return (
        <Container className="product-detail-container">
            {productsArr.map((product, index) => (
                <Row key={index}>
                    <Col md={6}>
                        <img className="product-image" src={product.imageUrl} alt={product.title} />
                    </Col>
                    <Col md={6} className="product-details">
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price">${product.price}</p>
                        <Button className="add-to-cart-btn" variant="primary">
                            Add to Cart
                        </Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default ProductList;
