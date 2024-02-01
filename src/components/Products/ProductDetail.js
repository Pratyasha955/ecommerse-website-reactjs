import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ContextProvider';
import ProductReview from './ProductReview';
import './ProductDetail.css';


const ProductDetail = () => {
    const { id } = useParams();
    const { productsArr, addToCart } = useProductContext();
    const product = productsArr.find((p) => p.title === id);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <Container className="product-detail-container">
            <Row>
                <Col md={6}>
                    <img className="product-image" src={product.imageUrl[0]} alt={product.title} />
                </Col>
                <Col md={6} className="product-details">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-price">${product.price}</p>
                    <Button className="add-to-cart-btn" variant="primary" onClick={() => addToCart(product)}>
                        Add to Cart
                    </Button>
                    {/* Add other product details */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProductReview reviews={product.reviews || []} />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;