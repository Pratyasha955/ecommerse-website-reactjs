import React from 'react';
import './ProductReview.css';

const ProductReview = ({ reviews }) => {
    return (
        <div className="product-reviews-container">
            <h3 className="customer-reviews">Customer Reviews</h3>
            <ul className="customer-review-list">
                {reviews.map((review, index) => (
                    <li key={index} className="customer-review-item">{review}</li>
                ))}
            </ul>
        </div>
    );
};
export default ProductReview;